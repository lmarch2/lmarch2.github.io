const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [
	{
        name: '违背的青春',      #歌名
        artist: '薛之谦',  #歌手
        url: 'https://music.163.com/#/song?id=1307334195',    #mp3的url地址
        cover: 'cover.jpg' #歌的封面
    }
	]
});
