'use strict';
// The landing-page demo is illustrative, never presented as live game data.
const demo = {
  damage: [
    { name:'Herom', role:'Beschwörer', total:'18,42 Mio.', rate:'82,9k', bar:100, color:'#9162c9', skills:[['Kette der Erde','5,82 Mio.',31.6],['Geisterexplosion','4,21 Mio.',22.9],['Feuergeist','3,77 Mio.',20.5]] },
    { name:'Spieler 2', role:'Gladiator', total:'14,91 Mio.', rate:'67,2k', bar:81, color:'#b78b53', skills:[['Fähigkeit A','5,04 Mio.',33.8],['Fähigkeit B','3,42 Mio.',22.9],['Fähigkeit C','2,72 Mio.',18.2]] },
    { name:'Spieler 3', role:'Zauberer', total:'11,27 Mio.', rate:'50,8k', bar:61, color:'#5d88c2', skills:[['Fähigkeit A','4,40 Mio.',39.0],['Fähigkeit B','2,75 Mio.',24.4],['Fähigkeit C','1,80 Mio.',16.0]] },
    { name:'Spieler 4', role:'Kantor', total:'8,10 Mio.', rate:'36,5k', bar:44, color:'#579b83', skills:[['Fähigkeit A','2,65 Mio.',32.7],['Fähigkeit B','2,01 Mio.',24.8],['Fähigkeit C','1,28 Mio.',15.8]] },
    { name:'Spieler 5', role:'Kleriker', total:'2,36 Mio.', rate:'10,6k', bar:13, color:'#9d9678', skills:[['Fähigkeit A','1,04 Mio.',44.1],['Fähigkeit B','640k',27.1],['Fähigkeit C','310k',13.1]] }
  ],
  heal: [
    { name:'Spieler 5', role:'Kleriker', total:'10,05 Mio.', rate:'45,3k', bar:100, color:'#579b83', skills:[['Heilung A','3,82 Mio.',38],['Heilung B','2,91 Mio.',29],['Heilung C','1,54 Mio.',15.3]] },
    { name:'Spieler 4', role:'Kantor', total:'3,48 Mio.', rate:'15,7k', bar:35, color:'#b78b53', skills:[['Heilung A','1,40 Mio.',40.2],['Heilung B','970k',27.9],['Heilung C','550k',15.8]] },
    { name:'Herom', role:'Beschwörer', total:'620k', rate:'2,8k', bar:6, color:'#9162c9', skills:[['Heilung A','380k',61.3],['Heilung B','160k',25.8],['Heilung C','80k',12.9]] },
    { name:'Spieler 2', role:'Gladiator', total:'240k', rate:'1,1k', bar:2.4, color:'#5d88c2', skills:[['Heilung A','240k',100]] },
    { name:'Spieler 3', role:'Zauberer', total:'180k', rate:'811', bar:1.8, color:'#9d9678', skills:[['Heilung A','180k',100]] }
  ]
};
let metric = 'damage';
let selected = 0;
const tabs = [...document.querySelectorAll('[data-metric]')];
function renderDetail() {
  const player = demo[metric][selected];
  document.getElementById('detail-name').textContent = player.name;
  document.getElementById('detail-metric').textContent = `Fähigkeiten · ${metric === 'damage' ? 'Schaden' : 'Heilung'}`;
  const target = document.getElementById('detail-skills');
  target.replaceChildren();
  for (const [name,total,percentage] of player.skills) {
    const row = document.createElement('div'); row.className = 'skill-preview';
    const label = document.createElement('span'); label.textContent = name;
    const track = document.createElement('div'); track.className = 'skill-track';
    const bar = document.createElement('span'); bar.style.width = `${percentage}%`; bar.style.background = metric === 'damage' ? 'var(--violet)' : 'var(--green)';
    track.append(bar); label.append(track);
    const amount = document.createElement('span'); amount.textContent = total;
    const share = document.createElement('span'); share.textContent = `${percentage.toLocaleString('de-DE')}%`;
    row.append(label,amount,share); target.append(row);
  }
}
function renderMeter() {
  const rows = document.getElementById('meter-rows'); rows.replaceChildren();
  demo[metric].forEach((player,index) => {
    const row = document.createElement('button'); row.type = 'button'; row.className = 'meter-row';
    row.style.setProperty('--bar',`${player.bar}%`); row.style.setProperty('--row-color',player.color);
    row.setAttribute('aria-pressed',String(index === selected));
    row.setAttribute('aria-label',`${player.name}: ${player.total} ${metric === 'damage' ? 'Schaden' : 'Heilung'}, ${player.rate} pro Sekunde. Details anzeigen.`);
    const rank = document.createElement('span'); rank.className = 'rank'; rank.textContent = `${index+1}.`;
    const name = document.createElement('span'); name.className = 'player'; name.textContent = player.name;
    const role = document.createElement('span'); role.className = 'class-label'; role.textContent = player.role;
    const value = document.createElement('span'); value.className = 'meter-value'; value.textContent = `${player.total} `;
    const rate = document.createElement('small'); rate.textContent = `(${player.rate}/s)`; value.append(rate);
    row.append(rank,name,role,value);
    row.addEventListener('click',() => {
      selected = index;
      rows.querySelectorAll('button').forEach((button,i) => button.setAttribute('aria-pressed',String(i === index)));
      renderDetail();
    });
    rows.append(row);
  });
  renderDetail();
}
function selectMetric(tab) {
  metric = tab.dataset.metric; selected = 0;
  tabs.forEach(t => { t.setAttribute('aria-selected',String(t === tab)); t.tabIndex = t === tab ? 0 : -1; });
  document.getElementById('meter-panel').setAttribute('aria-labelledby',tab.id);
  renderMeter();
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click',() => selectMetric(tab));
  tab.addEventListener('keydown',event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = tabs[1-index];
    else if (event.key === 'Home') next = tabs[0];
    else if (event.key === 'End') next = tabs[tabs.length-1];
    if (next) { event.preventDefault(); selectMetric(next); next.focus(); }
  });
});
renderMeter();
// A versioned, same-origin content file keeps future release changes isolated.
fetch('release.json').then(response => {
  if (!response.ok) throw new Error('Release metadata unavailable');
  return response.json();
}).then(release => {
  const download = new URL(release.downloadUrl);
  const source = new URL(release.releaseUrl);
  if (download.origin !== 'https://github.com' || source.origin !== 'https://github.com' || !download.pathname.startsWith('/becrazy76/herom-assets/releases/download/')) return;
  document.querySelectorAll('[data-download]').forEach(link => { link.href = download.href; });
  document.querySelectorAll('[data-release]').forEach(link => { link.href = source.href; });
  document.querySelectorAll('[data-version]').forEach(node => { node.textContent = `Beta ${release.version}`; });
  document.querySelectorAll('[data-size]').forEach(node => { node.textContent = release.sizeLabel; });
}).catch(() => { /* The verified HTML download is the no-JS/network-error fallback. */ });
