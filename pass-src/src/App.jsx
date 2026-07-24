import { useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode';
import Lanyard from './components/Lanyard.jsx';
import {
  TIERS,
  createBandTexture,
  createCardBack,
  createCardFace,
  getTier
} from './passDesign.js';

const PREVIEW = {
  balance: 1280,
  address: null,
  displayAddress: '0x71F3…9A2C',
  verified: false
};

function formatAddress(address) {
  if (!address || address.length < 12) return PREVIEW.displayAddress;
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export default function App() {
  const [passData, setPassData] = useState(PREVIEW);
  const [showQr, setShowQr] = useState(false);
  const [qrImage, setQrImage] = useState('');
  const tier = getTier(passData.balance);

  useEffect(() => {
    const receivePassData = (event) => {
      if (event.data?.type !== 'labudao:pass-data') return;
      const balance = Number(event.data.balance ?? 0);
      const address = event.data.address || null;
      setPassData({
        balance: Number.isFinite(balance) ? balance : 0,
        address,
        displayAddress: formatAddress(address),
        verified: Boolean(event.data.verified)
      });
    };
    window.addEventListener('message', receivePassData);
    window.parent.postMessage({ type: 'labudao:pass-ready' }, '*');
    return () => window.removeEventListener('message', receivePassData);
  }, []);

  useEffect(() => {
    const payload = JSON.stringify({
      protocol: 'LABUDAO',
      event: 'HK / 2026',
      holder: passData.address,
      balance: passData.balance,
      tier: tier.name,
      verified: passData.verified,
      chainId: 1,
      tokenContract: '0x45ae2750347DBf7d5bfB421698c1712e87481616'
    });
    QRCode.toDataURL(payload, {
      width: 420,
      margin: 1,
      color: { dark: '#080b10', light: '#f4f6f8' }
    }).then(setQrImage);
  }, [passData, tier.name]);

  const textures = useMemo(() => ({
    front: createCardFace({
      tier,
      balance: passData.balance,
      address: passData.displayAddress,
      verified: passData.verified
    }),
    back: createCardBack({ tier, address: passData.displayAddress }),
    band: createBandTexture(tier)
  }), [passData, tier]);

  const requestWallet = () => {
    window.parent.postMessage({ type: 'labudao:connect' }, '*');
  };

  return (
    <main className={`pass-experience tier-${tier.id}`} style={{ '--tier-accent': tier.accent, '--tier-edge': tier.edge }}>
      <section className="pass-stage" aria-label="Interactive LABUDAO physical rights pass">
        <Lanyard
          key={`${tier.id}-${passData.displayAddress}`}
          position={[0, 0, 22]}
          gravity={[0, -40, 0]}
          frontImage={textures.front}
          backImage={textures.back}
          lanyardImage={textures.band}
          lanyardWidth={1.05}
          tier={tier}
        />
      </section>

      <aside className="pass-panel" aria-labelledby="passTitle">
        <header>
          <div className="pass-brand" aria-label="LABUDAO">
            <strong>LABU</strong><span>/DAO</span>
          </div>
          <p>{tier.material}</p>
        </header>

        <div className="pass-heading">
          <h1 id="passTitle">Member Pass</h1>
          <p className={passData.verified ? 'pass-state verified' : 'pass-state'}>
            <i aria-hidden="true" />
            {passData.verified ? 'Access active · 权益已激活' : 'Preview · 连接钱包后验证'}
          </p>
        </div>

        <dl className="pass-facts">
          <div><dt>Balance</dt><dd>{passData.balance.toLocaleString('en-US')} LABU</dd></div>
          <div><dt>Tier</dt><dd>{tier.name} / {tier.level.replace('LEVEL ', 'L')}</dd></div>
          <div><dt>Holder</dt><dd>{passData.displayAddress}</dd></div>
        </dl>

        <div className="tier-scale" aria-label={`Current member tier: ${tier.name}`}>
          <p>Level is calculated from current LABU balance.</p>
          <div className="tier-rail" aria-hidden="true">
            <span />
            {TIERS.map((item) => (
              <i key={item.id} className={item.id === tier.id ? 'active' : ''} />
            ))}
          </div>
          <div className="tier-labels">
            {TIERS.map((item) => (
              <div key={item.id} className={item.id === tier.id ? 'active' : ''}>
                <strong>{item.name}</strong>
                <small>{item.range}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="pass-actions">
          <button className="pass-action primary" type="button" onClick={() => setShowQr(true)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 3h7v7H3V3Zm2 2v3h3V5H5Zm9-2h7v7h-7V3Zm2 2v3h3V5h-3ZM3 14h7v7H3v-7Zm2 2v3h3v-3H5Zm9-2h3v3h-3v-3Zm4 0h3v3h-3v-3Zm-4 4h3v3h-3v-3Zm4 0h3v3h-3v-3Z" />
            </svg>
            Show event credential
          </button>
          {!passData.verified && (
            <button className="pass-action secondary" type="button" onClick={requestWallet}>
              Connect wallet to verify
            </button>
          )}
        </div>

        <footer>
          <span>Physical Rights Pass / HK 2026</span>
          <span>Ethereum Mainnet</span>
        </footer>
      </aside>

      {showQr && (
        <div className="qr-overlay" role="dialog" aria-modal="true" aria-labelledby="qrTitle">
          <button className="qr-close" type="button" onClick={() => setShowQr(false)} aria-label="Close QR credential">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" /></svg>
          </button>
          <div className="qr-card">
            <div>
              <p>LABU/DAO · HK / 2026</p>
              <h2 id="qrTitle">{passData.verified ? 'Verified credential' : 'Preview credential'}</h2>
            </div>
            {qrImage && <img src={qrImage} alt={`Event credential for ${passData.displayAddress}`} />}
            <dl>
              <div><dt>Tier</dt><dd>{tier.name}</dd></div>
              <div><dt>Balance</dt><dd>{passData.balance.toLocaleString('en-US')} LABU</dd></div>
              <div><dt>Holder</dt><dd>{passData.displayAddress}</dd></div>
            </dl>
            <p className="qr-note">Present this screen at the event entrance.<br />请在线下活动入口出示此凭证。</p>
          </div>
        </div>
      )}
    </main>
  );
}
