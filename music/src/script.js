document.addEventListener('DOMContentLoaded',function(){
	let blockPlayList = document.querySelector('.playList');
   
	//ПОДКЛЮЧАЕМСЯ КНОПКАМ
	let audio = document.getElementById('audio');
	let time = document.querySelector('.time');
	let volume = document.querySelector('#volume');
	let btnPlay = document.querySelector('.play');
	let btnPause = document.querySelector('.pause');
	let btnPrev = document.querySelector('.prev');
	let btnNext = document.querySelector('.next');
	let audioPlay;
   
	//блоки данных где у нас будеть информация о проиграемом треке
	let volumeText = document.querySelector('.volume span');
	let poster = document.querySelector('.poster');
	let ttl = document.querySelector('.ttl');
	let audioDesc = document.querySelector('.audio-desc');
	let viwes = document.querySelector('.views');
	let like = document.querySelector('.like');
	let dislike = document.querySelector('.dislike');
   
	//создаем место для создание воспроизведение
   
	let playList = [
	 {
	  id:0,
	  title:"Minelli",
	  audio:"./audio/Rampampam.mp3",
	  desc: "Текст песни рампампам",
	  img:"./audio/img/rampam.jpg",
	  viwes:10,
	  likes:{
	   liked:10,
	   disliked:100
	  }
	 },
	 {
	  id:1,
	  title:"Елвин Грей",
	  audio:"./audio/Обними.mp3",
	  desc: "Текст песни обнеми не отпускай",
	  img:"./audio/img/обними не отпускай.jpg",
	  viwes:20,
	  likes:{
	   liked:5,
	   disliked:0
	  }
	 },
	 {
	  id:2,
	  title:"Обстановка",
	  audio:"./audio/Обстановка по кайфу.mp3",
	  desc: "Текст песни обстановка по кайфу",
	  img:"./audio/img/обстановка по кайфу.jpg",
	  viwes:88,
	  likes:{
	   liked:55,
	   disliked:23
	  }
	 },
	 {
	  id:3,
	  title:"чародей",
	  audio:"./audio/чародей.mp3",
	  desc: "Текст песни Чародей",
	  img:"./audio/img/charodei.jpg",
	  viwes:88,
	  likes:{
	   liked:55,
	   disliked:23
	  }
	 }
	];
	// console.log(playList[0].title);
   
	function getAudioList(audioList){
	 const elem = audioList.map((itam)=>{
	  const {id, title, audio, img, ...playListItem} = itam;
	  return(`
	   <li data-id = "${id}">
		<img src="${img}" width = "70" height="50">
		<span>${title}</span>
	   </li>
	  `);
	 });
	 return`<ul>${elem.join("")}</ul>`
	}
   
	//ввыводим наш плейлист
	blockPlayList.innerHTML = getAudioList(playList);
	
	//переключать треки
   
	let treck;
   
	window.onload = function(){
	 treck = 0;
   
	}
   
	//функция по переключению плейлиста
	function switchTreck(numTreck){
	 let nextAudio, prevAudio;
   
	 poster.innerHTML = `<img src="${playList[numTreck].img}" width="70" height="50" >`;
	 ttl.innerText = playList[numTreck].title;
	 audioDesc.innerText = playList[numTreck].desc;
   
	 viwes.innerText = playList[numTreck].viwes;
	 like.innerText = playList[numTreck].liked;
	 dislike.innerText = playList[numTreck].disliked;
   
	 audio.src = playList[numTreck].audio;
	 audio.currentTime = 0;
	 audio.play();
   
	 nextAudio = document.querySelector(".playList ul li[data-id = '" +numTreck + "']");
	 prevAudio = document.querySelector(".playList ul li.active");
   
	 if(prevAudio){
	  prevAudio.classList.remove('active');
	 }
	 nextAudio.classList.add('active');
   
   
	}
   
	//функция воспроизведение музыки
   
	btnPlay.addEventListener('click',function(){
	 audio.play();
	 audioPlay = setInterval(function(){
	 
	   let audioTime = Math.round(audio.currentTime);
	   let audioLenth = Math.round(audio.duration);
	   time.style.width = (audioTime * 100) / audioLenth + "%";
   
	   if(audioTime == audioLenth && treck<3){
		treck++;
		switchTreck(treck);
	   }else if(audioTime == audioLenth && treck==2){
		treck = 0;
		switchTreck(treck);
	   }
	 })
	})
	//функция паузы
   
	btnPause.addEventListener('click',function(){
	 audio.pause();
	 clearInterval(audioPlay);
	});
   

	//создание превеыдушкй кнопки
 btnPrev.addEventListener('click',function(){
	if(treck > 0){
	 treck--;
	 switchTreck(treck);
	}else{
	 treck = 3;
	 switchTreck(treck);
	}
   });
   //создание следуюшей кнопки
   btnNext.addEventListener('click',function(){
	if(treck < 3){
	treck++;
	switchTreck(treck);
   }else{
	treck = 0;
	switchTreck(treck);
   }
  });
   let blockPlayListLi = document.querySelectorAll(".playList ul li");
   for(let i = 0; i<blockPlayListLi.length; i++){
  
	blockPlayListLi[i].addEventListener('click', function(){
  
	 switchTreck(blockPlayListLi[i].dataset.id);
	});
   }
  
  
   volume.addEventListener('input', function(){
	let volumeValue = this.value;
	audio.volume = volumeValue;
	volumeText.innerHTML = volumeValue;
   })
  })