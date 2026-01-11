/**
 * Virome API - Premium UI Template
 */

export const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Virome API</title>
  <link rel="icon" href="/assets/logo.png">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    :root{--accent:#00d4aa;--accent2:#00a8cc;--accent3:#a855f7;--glass:rgba(255,255,255,.03);--glass-border:rgba(255,255,255,.08);--text:#fff;--text-muted:#71717a;--text-dim:#3f3f46}
    body{font-family:'Inter',system-ui,sans-serif;min-height:100vh;color:var(--text);background:#050505}
    .bg-mesh{position:fixed;inset:0;z-index:-1;overflow:hidden}
    .bg-mesh::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(ellipse at 20% 20%,rgba(0,212,170,.12) 0%,transparent 50%),radial-gradient(ellipse at 80% 80%,rgba(168,85,247,.08) 0%,transparent 50%),radial-gradient(ellipse at 40% 60%,rgba(0,168,204,.06) 0%,transparent 40%);animation:meshMove 20s ease-in-out infinite}
    .bg-mesh::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,transparent 0%,#050505 70%)}
    @keyframes meshMove{0%,100%{transform:translate(0,0)}50%{transform:translate(-1%,1%)}}
    .container{max-width:1100px;margin:0 auto;padding:80px 32px 220px}
    .header{display:flex;align-items:center;gap:20px;margin-bottom:64px}
    .logo{width:56px;height:56px;border-radius:16px;box-shadow:0 8px 32px rgba(0,212,170,.2)}
    .brand{font-size:2.5rem;font-weight:700;background:linear-gradient(135deg,var(--accent),var(--accent2),var(--accent3));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .brand-wrap{position:relative}
    .badge{background:linear-gradient(135deg,#a855f7,#ec4899);color:#fff;font-size:.6rem;font-weight:600;padding:4px 10px;border-radius:20px;position:absolute;top:-8px;right:-80px;text-transform:uppercase}
    .cards{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-bottom:64px}
    @media(max-width:700px){.cards{grid-template-columns:1fr}}
    .card{background:var(--glass);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:20px;padding:28px;transition:all .3s}
    .card:hover{transform:translateY(-4px);border-color:rgba(0,212,170,.3);box-shadow:0 20px 40px rgba(0,0,0,.3)}
    .card-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:16px}
    .card-icon.green{background:linear-gradient(135deg,rgba(34,197,94,.2),rgba(0,212,170,.2))}
    .card-icon.purple{background:linear-gradient(135deg,rgba(168,85,247,.2),rgba(236,72,153,.2))}
    .card-icon.blue{background:linear-gradient(135deg,rgba(59,130,246,.2),rgba(0,168,204,.2))}
    .card-icon.pink{background:linear-gradient(135deg,rgba(236,72,153,.2),rgba(244,114,182,.2))}
    .card-title{font-size:1.15rem;font-weight:600;margin-bottom:8px}
    .card-desc{font-size:.9rem;color:var(--text-muted);line-height:1.6}
    .tabs{display:flex;gap:8px;margin-bottom:40px;padding:6px;background:var(--glass);border:1px solid var(--glass-border);border-radius:16px;width:fit-content}
    .tab{padding:12px 24px;background:transparent;border:none;color:var(--text-muted);font-size:.9rem;font-weight:500;cursor:pointer;border-radius:12px;transition:all .2s}
    .tab:hover{color:var(--text);background:rgba(255,255,255,.05)}
    .tab.active{color:var(--text);background:linear-gradient(135deg,rgba(0,212,170,.15),rgba(0,168,204,.15))}
    .tab-content{display:none}.tab-content.active{display:block}
    .section-title{font-size:.75rem;text-transform:uppercase;letter-spacing:2px;color:var(--accent);margin:40px 0 20px;font-weight:600;display:flex;align-items:center;gap:12px}
    .section-title::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--glass-border),transparent)}
    .api-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:14px}
    .api-card{background:var(--glass);border:1px solid var(--glass-border);border-radius:14px;padding:18px 20px;transition:all .2s;cursor:pointer}
    .api-card:hover{border-color:var(--accent);transform:translateX(4px)}
    .api-method{display:inline-block;font-size:.65rem;font-weight:700;padding:4px 10px;border-radius:6px;margin-right:12px;background:linear-gradient(135deg,rgba(34,197,94,.2),rgba(0,212,170,.2));color:#22c55e}
    .api-path{font-family:monospace;font-size:.85rem;color:#e5e5e5}
    .api-desc{font-size:.8rem;color:var(--text-dim);margin-top:10px}
    .search-box{display:flex;gap:14px;margin-bottom:28px}
    .search-input,.api-input{flex:1;background:var(--glass);border:1px solid var(--glass-border);padding:16px 22px;border-radius:14px;color:var(--text);font-size:1rem;font-family:inherit;transition:all .2s}
    .search-input:focus,.api-input:focus{outline:none;border-color:var(--accent)}
    .search-input::placeholder,.api-input::placeholder{color:var(--text-dim)}
    .api-select{background:var(--glass);border:1px solid var(--glass-border);padding:16px 22px;border-radius:14px;color:var(--text);font-size:.9rem;font-family:inherit;cursor:pointer}
    .api-select:focus{outline:none;border-color:var(--accent)}
    .api-select option{background:#0a0a0a}
    .btn{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#000;border:none;padding:16px 32px;border-radius:14px;font-size:.95rem;font-weight:600;font-family:inherit;cursor:pointer;transition:all .2s;box-shadow:0 4px 20px rgba(0,212,170,.3)}
    .btn:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,212,170,.4)}
    .btn:disabled{opacity:.5}
    .btn-sm{padding:14px 24px;font-size:.85rem}
    .results-list{max-height:55vh;overflow-y:auto}
    .result-item{display:flex;align-items:center;gap:16px;padding:14px 16px;border-radius:14px;cursor:pointer;transition:all .2s;border:1px solid transparent}
    .result-item:hover{background:var(--glass);border-color:var(--glass-border)}
    .result-item.active{background:linear-gradient(135deg,rgba(0,212,170,.1),rgba(0,168,204,.1));border-color:rgba(0,212,170,.3)}
    .result-thumb{width:56px;height:56px;border-radius:10px;object-fit:cover;background:var(--glass)}
    .result-info{flex:1;min-width:0}
    .result-title{font-size:.95rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .result-artist{font-size:.8rem;color:var(--text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .result-duration{font-size:.8rem;color:var(--text-dim);font-family:monospace}
    .no-results,.loading{padding:60px;text-align:center;color:var(--text-dim)}
    .loading{color:var(--accent);display:none}
    .player{position:fixed;bottom:0;left:0;right:0;background:rgba(5,5,5,.95);backdrop-filter:blur(30px);border-top:1px solid var(--glass-border);padding:20px 32px;display:none;z-index:100}
    .player.visible{display:block}
    .player-content{max-width:1100px;margin:0 auto}
    .player-main{display:flex;align-items:center;gap:20px;margin-bottom:14px}
    .player-thumb{width:60px;height:60px;border-radius:10px;object-fit:cover;background:var(--glass)}
    .player-info{flex:1;min-width:0}
    .player-title{font-size:1rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .player-artist{color:var(--text-muted);font-size:.85rem}
    .player-controls{display:flex;align-items:center;gap:12px}
    .ctrl-btn{width:44px;height:44px;border-radius:50%;background:var(--glass);border:1px solid var(--glass-border);color:var(--text);font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
    .ctrl-btn:hover{background:rgba(255,255,255,.1)}
    .ctrl-btn.play{background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#000;width:52px;height:52px}
    .progress-wrap{display:flex;align-items:center;gap:14px}
    .progress-time{font-size:.75rem;color:var(--text-muted);min-width:45px;font-family:monospace}
    .progress-bar{flex:1;height:5px;background:var(--glass);border-radius:3px;cursor:pointer}
    .progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:3px;width:0%}
    .api-row{display:flex;gap:14px;margin-bottom:18px;flex-wrap:wrap}
    .api-input{min-width:180px}
    .country-select-wrap{position:relative;flex:1;min-width:220px}
    .country-list{display:none;position:absolute;top:100%;left:0;right:0;background:rgba(10,10,10,.98);border:1px solid var(--glass-border);border-radius:14px;max-height:220px;overflow-y:auto;z-index:100;margin-top:6px}
    .country-item{padding:12px 18px;cursor:pointer;font-size:.9rem;transition:all .15s}
    .country-item:hover{background:var(--glass);color:var(--accent)}
    .api-response{background:var(--glass);border:1px solid var(--glass-border);border-radius:14px;padding:24px;margin-top:24px;max-height:420px;overflow:auto}
    .api-response pre{font-family:monospace;font-size:.8rem;color:var(--accent);white-space:pre-wrap;word-break:break-all}
    .api-url{font-family:monospace;font-size:.8rem;color:var(--text-muted);margin-bottom:18px;padding:14px 18px;background:var(--glass);border-radius:10px;border:1px solid var(--glass-border)}
    footer{margin-top:60px;color:var(--text-dim);font-size:.8rem;text-align:center}
  </style>
</head>
<body>
  <div class="bg-mesh"></div>
  <div class="container">
    <div class="header">
      <img src="/assets/logo.png" alt="Virome" class="logo">
      <span class="brand-wrap"><span class="brand">Virome API</span><span class="badge">Unofficial</span></span>
    </div>
    <div class="cards">
      <div class="card"><div class="card-icon green">📚</div><h3 class="card-title">Explore the Docs</h3><p class="card-desc">Comprehensive documentation to integrate Virome API into your music applications.</p></div>
      <div class="card"><div class="card-icon purple">⚡</div><h3 class="card-title">Open Source</h3><p class="card-desc">Built with Deno for blazing fast, secure, and modern music data access.</p></div>
      <div class="card"><div class="card-icon blue">🎵</div><h3 class="card-title">Full Featured</h3><p class="card-desc">Search songs, albums, artists. Stream music, get lyrics, and discover new tracks.</p></div>
      <div class="card"><div class="card-icon pink">�</div><h3 class="card-title">Live Player</h3><p class="card-desc">Test the API with our built-in player. Search and play music instantly.</p></div>
    </div>
    <div class="tabs">
      <button class="tab active" onclick="switchTab('docs')">Documentation</button>
      <button class="tab" onclick="switchTab('player')">Player</button>
      <button class="tab" onclick="switchTab('api')">API Tester</button>
    </div>
    <div id="docsTab" class="tab-content active">
      <div class="section-title">Search Endpoints</div>
      <div class="api-grid">
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/search</span><div class="api-desc">Search YouTube Music. Params: q, filter, region, language</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/yt_search</span><div class="api-desc">Search YouTube. Params: q, filter</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/search/suggestions</span><div class="api-desc">Get search suggestions. Params: q</div></div>
      </div>
      <div class="section-title">Content Endpoints</div>
      <div class="api-grid">
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/songs/:videoId</span><div class="api-desc">Get song details by video ID</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/albums/:browseId</span><div class="api-desc">Get album details and tracks</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/artists/:browseId</span><div class="api-desc">Get artist info and top songs</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/playlists/:playlistId</span><div class="api-desc">Get playlist details and tracks</div></div>
      </div>
      <div class="section-title">Discovery Endpoints</div>
      <div class="api-grid">
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/related/:videoId</span><div class="api-desc">Get related songs</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/similar</span><div class="api-desc">Find similar tracks</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/trending</span><div class="api-desc">Trending music by country</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/radio</span><div class="api-desc">Generate radio mix</div></div>
      </div>
      <div class="section-title">Streaming Endpoints</div>
      <div class="api-grid">
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/stream</span><div class="api-desc">Get stream URLs. Params: id</div></div>
        <div class="api-card"><span class="api-method">GET</span><span class="api-path">/api/lyrics</span><div class="api-desc">Get lyrics. Params: title, artist</div></div>
      </div>
    </div>
    <div id="playerTab" class="tab-content">
      <div class="search-box">
        <select class="api-select" id="searchType" style="min-width:130px">
          <option value="">All</option>
          <option value="songs">Songs</option>
          <option value="videos">Videos</option>
          <option value="artists">Artists</option>
          <option value="albums">Albums</option>
          <option value="playlists">Playlists</option>
        </select>
        <input type="text" class="search-input" id="searchInput" placeholder="Search for songs, artists, or albums...">
        <button class="btn" id="searchBtn" onclick="doSearch()">Search</button>
      </div>
      <div class="loading" id="loading">Searching...</div>
      <div class="results-list" id="resultsList"></div>
    </div>
    <div id="apiTab" class="tab-content">
      <div class="api-row">
        <select class="api-select" id="apiEndpoint" onchange="updateApiInputs()" style="min-width:240px">
          <option value="search">Search Songs</option>
          <option value="stream">Get Stream URLs</option>
          <option value="song">Get Song Details</option>
          <option value="album">Get Album</option>
          <option value="artist">Get Artist</option>
          <option value="playlist">Get Playlist</option>
          <option value="related">Get Related Songs</option>
          <option value="similar">Get Similar Tracks</option>
          <option value="lyrics">Get Lyrics</option>
          <option value="trending">Trending Music</option>
          <option value="radio">Generate Radio</option>
          <option value="topartists">Top Artists</option>
          <option value="toptracks">Top Tracks</option>
          <option value="artistinfo">Artist Info</option>
          <option value="trackinfo">Track Info</option>
          <option value="suggestions">Search Suggestions</option>
        </select>
      </div>
      <div class="api-row" id="apiInputs"></div>
      <div class="api-url" id="apiUrl">GET /api/search?q=Drake</div>
      <button class="btn btn-sm" onclick="testApi()">Test Endpoint</button>
      <div class="api-response" id="apiResponse"><pre>Click "Test Endpoint" to see the response...</pre></div>
    </div>
    <footer>Built with Deno</footer>
  </div>
  <div class="player" id="player">
    <div class="player-content">
      <div class="player-main">
        <img class="player-thumb" id="playerThumb" src="" alt="">
        <div class="player-info"><div class="player-title" id="playerTitle">-</div><div class="player-artist" id="playerArtist">-</div></div>
        <div class="player-controls">
          <button class="ctrl-btn" onclick="prevSong()">⏮</button>
          <button class="ctrl-btn play" id="playBtn" onclick="togglePlay()">▶</button>
          <button class="ctrl-btn" onclick="nextSong()">⏭</button>
        </div>
      </div>
      <div class="progress-wrap">
        <span class="progress-time" id="currentTime">0:00</span>
        <div class="progress-bar" id="progressBar" onclick="seek(event)"><div class="progress-fill" id="progressFill"></div></div>
        <span class="progress-time" id="duration">0:00</span>
      </div>
    </div>
  </div>
  <div id="ytplayer"></div>
  <script>
    (function(){var oe=console.error;console.error=function(){var m=arguments[0]||'';if(typeof m==='string'&&(m.includes('postMessage')||m.includes('youtube.com')||m.includes('ERR_BLOCKED')))return;oe.apply(console,arguments)}})();
    var tag=document.createElement('script');tag.src='https://www.youtube.com/iframe_api';document.head.appendChild(tag);
    var songs=[],player=null,playerReady=false,isPlaying=false,currentIndex=-1,progressInterval=null;
    document.getElementById('searchInput').onkeypress=e=>{if(e.key==='Enter')doSearch()};
    function switchTab(t){document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tab-content').forEach(x=>x.classList.remove('active'));document.querySelector('.tab[onclick*="'+t+'"]').classList.add('active');document.getElementById(t+'Tab').classList.add('active')}
    function onYouTubeIframeAPIReady(){player=new YT.Player('ytplayer',{height:'0',width:'0',playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,modestbranding:1,rel:0},events:{onReady:()=>{playerReady=true},onStateChange:onState,onError:onErr}})}
    function onErr(e){if(e.data===150||e.data===101){if(currentIndex<songs.length-1)setTimeout(()=>playSong(currentIndex+1),500)}}
    function onState(e){if(e.data===1){isPlaying=true;document.getElementById('playBtn').textContent='⏸';startProg()}else if(e.data===2){isPlaying=false;document.getElementById('playBtn').textContent='▶';stopProg()}else if(e.data===0){isPlaying=false;document.getElementById('playBtn').textContent='▶';stopProg();nextSong()}}
    function startProg(){stopProg();progressInterval=setInterval(updateProg,500)}
    function stopProg(){if(progressInterval){clearInterval(progressInterval);progressInterval=null}}
    function updateProg(){if(!player||!playerReady)return;var c=player.getCurrentTime()||0,t=player.getDuration()||0;document.getElementById('currentTime').textContent=fmt(c);document.getElementById('duration').textContent=fmt(t);document.getElementById('progressFill').style.width=t>0?(c/t*100)+'%':'0%'}
    function fmt(s){var m=Math.floor(s/60),sec=Math.floor(s%60);return m+':'+(sec<10?'0':'')+sec}
    function seek(e){if(!player||!playerReady)return;var bar=document.getElementById('progressBar'),rect=bar.getBoundingClientRect(),pct=(e.clientX-rect.left)/rect.width;player.seekTo(pct*(player.getDuration()||0),true)}
    async function doSearch(){var q=document.getElementById('searchInput').value.trim();if(!q)return;var filter=document.getElementById('searchType').value;document.getElementById('searchBtn').disabled=true;document.getElementById('loading').style.display='block';document.getElementById('resultsList').innerHTML='';try{var url='/api/search?q='+encodeURIComponent(q);if(filter)url+='&filter='+filter;var res=await fetch(url);var data=await res.json();songs=data.results||[];renderResults(filter)}catch(e){songs=[];renderResults(filter)}document.getElementById('searchBtn').disabled=false;document.getElementById('loading').style.display='none'}
    function renderResults(filter){var list=document.getElementById('resultsList');if(!songs.length){list.innerHTML='<div class="no-results">No results found</div>';return}if(filter==='artists'){list.innerHTML=songs.map((s,i)=>'<div class="result-item" onclick="openArtist(\\''+s.browseId+'\\')"><img class="result-thumb" style="border-radius:50%" src="'+(s.thumbnails?.[0]?.url||'')+'"><div class="result-info"><div class="result-title">'+esc(s.title||'Unknown')+'</div><div class="result-artist">Artist</div></div></div>').join('')}else if(filter==='albums'){list.innerHTML=songs.map((s,i)=>'<div class="result-item" onclick="openAlbum(\\''+s.browseId+'\\')"><img class="result-thumb" src="'+(s.thumbnails?.[0]?.url||'')+'"><div class="result-info"><div class="result-title">'+esc(s.title||'Unknown')+'</div><div class="result-artist">'+esc(s.artists?.map(a=>a.name).join(', ')||'Album')+'</div></div></div>').join('')}else{list.innerHTML=songs.map((s,i)=>{var isPlayable=s.videoId&&(s.resultType==='song'||s.resultType==='video'||!s.resultType);var onclick=isPlayable?'playSong('+i+')':s.resultType==='artist'?'openArtist(\\''+s.browseId+'\\')':s.resultType==='album'?'openAlbum(\\''+s.browseId+'\\')':'';var typeLabel=s.isTopResult?'<span style="background:linear-gradient(135deg,var(--accent),var(--accent2));color:#000;font-size:.55rem;padding:2px 8px;border-radius:4px;margin-left:8px;font-weight:600">TOP</span>':s.resultType&&s.resultType!=='song'?'<span style="background:var(--glass);color:var(--text-muted);font-size:.55rem;padding:2px 8px;border-radius:4px;margin-left:8px;text-transform:uppercase">'+s.resultType+'</span>':'';return '<div class="result-item'+(i===currentIndex?' active':'')+'" onclick="'+onclick+'"><img class="result-thumb" src="'+(s.thumbnails?.[0]?.url||(s.videoId?'https://img.youtube.com/vi/'+s.videoId+'/mqdefault.jpg':''))+'"><div class="result-info"><div class="result-title">'+esc(s.title||'Unknown')+typeLabel+'</div><div class="result-artist">'+esc(s.artists?.map(a=>a.name).join(', ')||(s.subtitle||'Unknown'))+'</div></div><div class="result-duration">'+(s.duration||'')+'</div></div>'}).join('')}}
    function openArtist(id){switchTab('api');document.getElementById('apiEndpoint').value='artist';updateApiInputs();document.getElementById('api_browseId').value=id;updateApiUrl();testApi()}
    function openAlbum(id){switchTab('api');document.getElementById('apiEndpoint').value='album';updateApiInputs();document.getElementById('api_browseId').value=id;updateApiUrl();testApi()}
    function playSong(i){if(!songs[i])return;if(!playerReady){setTimeout(()=>playSong(i),300);return}currentIndex=i;var s=songs[i];document.getElementById('playerTitle').textContent=s.title||'Unknown';document.getElementById('playerArtist').textContent=s.artists?.map(a=>a.name).join(', ')||'Unknown';document.getElementById('playerThumb').src=s.thumbnails?.[0]?.url||'https://img.youtube.com/vi/'+s.videoId+'/mqdefault.jpg';document.getElementById('player').className='player visible';document.querySelectorAll('.result-item').forEach((el,idx)=>el.className=idx===i?'result-item active':'result-item');player.loadVideoById(s.videoId);isPlaying=true;document.getElementById('playBtn').textContent='⏸'}
    function togglePlay(){if(!playerReady)return;if(isPlaying)player.pauseVideo();else player.playVideo()}
    function prevSong(){if(currentIndex>0)playSong(currentIndex-1)}
    function nextSong(){if(currentIndex<songs.length-1)playSong(currentIndex+1)}
    function esc(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML}
    var apiCfg={search:{inputs:[{n:'q',p:'Search query',v:"Drake God's Plan"},{n:'filter',p:'Filter',v:'songs'}],url:'/api/search'},stream:{inputs:[{n:'id',p:'Video ID',v:'xpVfcZ0ZcFM'}],url:'/api/stream'},song:{inputs:[{n:'videoId',p:'Video ID',v:'xpVfcZ0ZcFM'}],url:'/api/songs/{videoId}'},album:{inputs:[{n:'browseId',p:'Album ID',v:'MPREb_K5gbGpJwFbv'}],url:'/api/albums/{browseId}'},artist:{inputs:[{n:'browseId',p:'Artist ID',v:'UCU6cE7pdJPc6DU2jSrKEsdQ'}],url:'/api/artists/{browseId}'},playlist:{inputs:[{n:'playlistId',p:'Playlist ID',v:'RDCLAK5uy_n9Fbdw7e6ap-98_A-8JYBmPv64v-Uaq1g'}],url:'/api/playlists/{playlistId}'},related:{inputs:[{n:'id',p:'Video ID',v:'xpVfcZ0ZcFM'}],url:'/api/related/{id}'},similar:{inputs:[{n:'title',p:'Song title',v:"God's Plan"},{n:'artist',p:'Artist',v:'Drake'}],url:'/api/similar'},lyrics:{inputs:[{n:'title',p:'Song title',v:"Blinding Lights"},{n:'artist',p:'Artist',v:'The Weeknd'}],url:'/api/lyrics'},trending:{inputs:[{n:'country',p:'Country',v:'Tunisia',type:'country'}],url:'/api/trending'},radio:{inputs:[{n:'videoId',p:'Video ID',v:'xpVfcZ0ZcFM'}],url:'/api/radio'},topartists:{inputs:[{n:'country',p:'Country',v:'Tunisia',type:'country'},{n:'limit',p:'Limit',v:'20'}],url:'/api/top/artists'},toptracks:{inputs:[{n:'country',p:'Country',v:'Tunisia',type:'country'},{n:'limit',p:'Limit',v:'20'}],url:'/api/top/tracks'},artistinfo:{inputs:[{n:'artist',p:'Artist name',v:'Drake'}],url:'/api/artist/info'},trackinfo:{inputs:[{n:'title',p:'Song title',v:"God's Plan"},{n:'artist',p:'Artist',v:'Drake'}],url:'/api/track/info'},suggestions:{inputs:[{n:'q',p:'Query',v:'Drake'}],url:'/api/search/suggestions'}};
    var countries=["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
    function updateApiInputs(){var ep=document.getElementById('apiEndpoint').value,cfg=apiCfg[ep];var html='';cfg.inputs.forEach(function(i){if(i.type==='country'){html+='<div class="country-select-wrap"><input class="api-input country-search" id="api_'+i.n+'" placeholder="Search country..." value="'+(i.v||'')+'" autocomplete="off" onfocus="showCountryList(this)" oninput="filterCountries(this)"><div class="country-list" id="countryList_'+i.n+'"></div></div>'}else{html+='<input class="api-input" id="api_'+i.n+'" placeholder="'+i.p+'" value="'+(i.v||'')+'">'}});document.getElementById('apiInputs').innerHTML=html;updateApiUrl()}
    function showCountryList(input){var listId='countryList_'+input.id.replace('api_','');var list=document.getElementById(listId);list.innerHTML=countries.map(c=>'<div class="country-item" onclick="selectCountry(\\''+input.id+'\\',\\''+c+'\\')">'+c+'</div>').join('');list.style.display='block'}
    function filterCountries(input){var listId='countryList_'+input.id.replace('api_','');var list=document.getElementById(listId);var val=input.value.toLowerCase();var filtered=countries.filter(c=>c.toLowerCase().includes(val));list.innerHTML=filtered.map(c=>'<div class="country-item" onclick="selectCountry(\\''+input.id+'\\',\\''+c+'\\')">'+c+'</div>').join('');list.style.display='block';updateApiUrl()}
    function selectCountry(inputId,country){document.getElementById(inputId).value=country;document.getElementById('countryList_'+inputId.replace('api_','')).style.display='none';updateApiUrl()}
    document.addEventListener('click',function(e){if(!e.target.classList.contains('country-search')){document.querySelectorAll('.country-list').forEach(l=>l.style.display='none')}});
    function updateApiUrl(){var ep=document.getElementById('apiEndpoint').value,cfg=apiCfg[ep],url=cfg.url,params=new URLSearchParams();cfg.inputs.forEach(i=>{var val=document.getElementById('api_'+i.n)?.value?.trim()||i.v||'';if(val){if(url.includes('{'+i.n+'}'))url=url.replace('{'+i.n+'}',encodeURIComponent(val));else params.append(i.n,val)}});var qs=params.toString();if(qs)url+='?'+qs;document.getElementById('apiUrl').textContent='GET '+url}
    document.getElementById('apiInputs').oninput=updateApiUrl;
    async function testApi(){var ep=document.getElementById('apiEndpoint').value,cfg=apiCfg[ep],url=cfg.url,params=new URLSearchParams();cfg.inputs.forEach(i=>{var val=document.getElementById('api_'+i.n)?.value?.trim();if(val){if(url.includes('{'+i.n+'}'))url=url.replace('{'+i.n+'}',encodeURIComponent(val));else params.append(i.n,val)}});var qs=params.toString();if(qs)url+='?'+qs;document.getElementById('apiResponse').innerHTML='<pre style="color:var(--accent)">Loading...</pre>';try{var res=await fetch(url);var data=await res.json();document.getElementById('apiResponse').innerHTML='<pre>'+JSON.stringify(data,null,2)+'</pre>'}catch(e){document.getElementById('apiResponse').innerHTML='<pre style="color:#ef4444">Error: '+e.message+'</pre>'}}
    updateApiInputs();
  </script>
</body>
</html>`;
