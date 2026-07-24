export const TIERS = [
  {
    id: 'archive',
    name: 'Archive',
    level: 'LEVEL 01',
    min: 0,
    range: '0–99 LABU',
    accent: '#d9dde3',
    edge: '#7d8794',
    surface: '#15181d',
    material: 'Pearl matte'
  },
  {
    id: 'alloy',
    name: 'Alloy',
    level: 'LEVEL 02',
    min: 100,
    range: '100–499 LABU',
    accent: '#b7c7d8',
    edge: '#6f8ba5',
    surface: '#101821',
    material: 'Brushed alloy'
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    level: 'LEVEL 03',
    min: 500,
    range: '500–1,999 LABU',
    accent: '#7396ff',
    edge: '#315fff',
    surface: '#080b12',
    material: 'Smoked glass'
  },
  {
    id: 'patron',
    name: 'Patron',
    level: 'LEVEL 04',
    min: 2000,
    range: '2,000+ LABU',
    accent: '#b6a9ff',
    edge: '#725cff',
    surface: '#100c1d',
    material: 'Violet ceramic'
  }
];

export function getTier(balance) {
  return [...TIERS].reverse().find((tier) => balance >= tier.min) ?? TIERS[0];
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
}

function fitText(ctx, text, maxWidth, startSize, weight = 500) {
  let size = startSize;
  do {
    ctx.font = `${weight} ${size}px Manrope, Arial, sans-serif`;
    if (ctx.measureText(text).width <= maxWidth) return;
    size -= 2;
  } while (size > 18);
}

export function createCardFace({ tier, balance, address, verified }) {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 1260;
  const ctx = canvas.getContext('2d');

  const background = ctx.createLinearGradient(0, 0, 900, 1260);
  background.addColorStop(0, tier.surface);
  background.addColorStop(0.64, '#06080c');
  background.addColorStop(1, tier.surface);
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const edge = ctx.createLinearGradient(0, 0, 900, 1260);
  edge.addColorStop(0, tier.accent);
  edge.addColorStop(0.2, 'rgba(255,255,255,.16)');
  edge.addColorStop(0.52, tier.edge);
  edge.addColorStop(1, 'rgba(255,255,255,.45)');
  ctx.strokeStyle = edge;
  ctx.lineWidth = 9;
  roundedRect(ctx, 26, 26, 848, 1208, 55);
  ctx.stroke();

  ctx.globalAlpha = 0.13;
  for (let y = 0; y < 1260; y += 7) {
    ctx.fillStyle = y % 14 === 0 ? tier.accent : '#ffffff';
    ctx.fillRect(0, y, 900, 1);
  }
  ctx.globalAlpha = 1;

  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#f4f6f8';
  ctx.font = '800 66px Manrope, Arial, sans-serif';
  ctx.fillText('LABU', 78, 142);
  const labuWidth = ctx.measureText('LABU').width;
  ctx.fillStyle = tier.accent;
  ctx.font = '500 66px Manrope, Arial, sans-serif';
  ctx.fillText('/DAO', 78 + labuWidth, 142);

  ctx.fillStyle = 'rgba(244,246,248,.62)';
  ctx.font = '500 20px monospace';
  ctx.letterSpacing = '4px';
  ctx.fillText('PHYSICAL RIGHTS PASS', 82, 226);

  ctx.strokeStyle = 'rgba(255,255,255,.22)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(82, 282);
  ctx.lineTo(818, 282);
  ctx.stroke();

  ctx.fillStyle = tier.accent;
  fitText(ctx, tier.name.toUpperCase(), 736, 106, 500);
  ctx.fillText(tier.name.toUpperCase(), 82, 456);
  ctx.fillStyle = 'rgba(244,246,248,.72)';
  ctx.font = '500 25px monospace';
  ctx.fillText(tier.level, 84, 546);

  ctx.strokeStyle = 'rgba(255,255,255,.22)';
  ctx.beginPath();
  ctx.moveTo(82, 620);
  ctx.lineTo(818, 620);
  ctx.stroke();

  ctx.fillStyle = '#f4f6f8';
  ctx.font = '600 38px Manrope, Arial, sans-serif';
  ctx.fillText(`${balance.toLocaleString('en-US')} LABU`, 82, 704);

  ctx.strokeStyle = verified ? tier.accent : 'rgba(244,246,248,.38)';
  ctx.lineWidth = 3;
  roundedRect(ctx, 565, 660, 253, 86, 14);
  ctx.stroke();
  ctx.fillStyle = verified ? tier.accent : 'rgba(244,246,248,.58)';
  ctx.font = '600 24px monospace';
  ctx.fillText(verified ? 'VERIFIED' : 'PREVIEW', 610, 705);

  ctx.fillStyle = 'rgba(244,246,248,.16)';
  for (let row = 0; row < 7; row += 1) {
    for (let col = 0; col < 18; col += 1) {
      const pulse = (row * 18 + col) % 5 === 0;
      ctx.fillStyle = pulse ? tier.accent : 'rgba(244,246,248,.2)';
      ctx.beginPath();
      ctx.arc(86 + col * 36, 830 + row * 36, pulse ? 3.5 : 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.fillStyle = 'rgba(244,246,248,.7)';
  ctx.font = '500 25px monospace';
  ctx.fillText(address, 82, 1136);
  ctx.textAlign = 'right';
  ctx.fillText('HK / 2026', 818, 1136);

  return canvas.toDataURL('image/png');
}

export function createCardBack({ tier, address }) {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 1260;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = tier.surface;
  ctx.fillRect(0, 0, 900, 1260);

  ctx.strokeStyle = tier.edge;
  ctx.lineWidth = 8;
  roundedRect(ctx, 28, 28, 844, 1204, 55);
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#f4f6f8';
  ctx.font = '800 58px Manrope, Arial, sans-serif';
  ctx.fillText('LABU/DAO', 450, 155);
  ctx.fillStyle = tier.accent;
  ctx.font = '500 25px monospace';
  ctx.fillText('ONE PROTOCOL · EVERY COLLECTIBLE', 450, 220);

  ctx.strokeStyle = 'rgba(255,255,255,.24)';
  ctx.strokeRect(170, 370, 560, 560);
  ctx.fillStyle = 'rgba(255,255,255,.05)';
  ctx.fillRect(190, 390, 520, 520);
  ctx.fillStyle = 'rgba(244,246,248,.75)';
  ctx.font = '500 23px monospace';
  ctx.fillText('PRESENT THIS PASS FOR VERIFICATION', 450, 1000);
  ctx.fillText(address, 450, 1080);
  return canvas.toDataURL('image/png');
}

export function createBandTexture(tier) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 240;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#090c12';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const weave = ctx.createLinearGradient(0, 0, 0, 240);
  weave.addColorStop(0, '#252b35');
  weave.addColorStop(0.5, '#0a0d13');
  weave.addColorStop(1, '#1a1f28');
  ctx.fillStyle = weave;
  for (let x = -240; x < 1440; x += 24) {
    ctx.save();
    ctx.translate(x, 0);
    ctx.rotate(-0.12);
    ctx.fillRect(0, -80, 10, 400);
    ctx.restore();
  }

  ctx.textBaseline = 'middle';
  ctx.font = '700 64px Manrope, Arial, sans-serif';
  for (let x = 50; x < 1200; x += 390) {
    ctx.fillStyle = '#f2f4f7';
    ctx.fillText('LABU', x, 120);
    ctx.fillStyle = tier.accent;
    ctx.fillText('/DAO', x + 175, 120);
  }
  return canvas.toDataURL('image/png');
}
