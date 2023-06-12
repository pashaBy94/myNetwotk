        export function expVid(){  
            let player = document.querySelector('.player');
            let video = document.querySelector('.videod');
            let interfac = player.querySelector('.interface');
            let play = player.querySelector('.play');
            let stop = player.querySelector('.stop');
            let position = player.querySelector('.position');
            let mute = player.querySelector('.mute');
            let volume = player.querySelector('.volume');
            video.volume = 0.5;
            
            video.addEventListener('canplay',(event)=>{
                // play.style.backgroundImage = 'url(images/play.png)';
                position.firstElementChild.style.width = '0%';
                player.classList.add('active');
            });
            video.addEventListener('playing',()=>{
                play.style.backgroundImage = 'url(images/pause.png)';
                player.classList.remove('active');
            });
            video.addEventListener('pause', ()=>{
                play.style.backgroundImage = 'url(images/play.png)';
                player.classList.add('active');
            });
            video.addEventListener('timeupdate', ()=>{
                position.firstElementChild.style.width = (video.currentTime/video.duration)*100 + '%';
        
            });
            video.addEventListener('ended', ()=>{
                video.load();
            });
            play.addEventListener('click', (event)=>{
                if(video.paused){
                    video.play();
                } else{
                    video.pause();
                }
            });
            stop.addEventListener('click', ()=>{
                video.load();
            });
            position.addEventListener('click', (event)=>{
                let coords = position.getBoundingClientRect();
                let xproc =  ((event.clientX - coords.left)/coords.width)*100; 
                video.currentTime = Math.round(video.duration*(xproc)/100); 
                position.firstElementChild.style.width = xproc + 'px';
            });
            let lastbtn = 0;
            volume.addEventListener('mousedown', function (event){
                lastbtn = event.clientY;
                volume.addEventListener('mousemove', movs);
                volume.addEventListener('mouseup', ups)
                video.muted = false;
                mute.style.backgroundImage = 'url(images/mute.png)';
            });
            function ups(event){
                volume.removeEventListener('mousemove', movs);
                volume.removeEventListener('mouseup', ups);
                let coords = this.getBoundingClientRect();
                let y = lastbtn - coords.top;
                let yproc = ((coords.height - y)/coords.height).toFixed(2);
                volume.firstElementChild.style.height = yproc*100 + '%';
                video.volume = yproc;
                lastbtn = event.clientY;
            }
            function movs(event){
                let coords = this.getBoundingClientRect();
                let y = lastbtn - coords.top;
                let yproc = ((coords.height - y)/coords.height).toFixed(2);
                volume.firstElementChild.style.height = yproc*100 + '%';
                video.volume = yproc;
                lastbtn = event.clientY;
            }
            let currentVol;
            let currentHeig;
            mute.addEventListener('click', function(){
                if(!video.muted){
                    currentVol = video.volume;
                    currentHeig = parseInt(volume.firstElementChild.style.height);
                    console.log(currentHeig);
                    video.muted = true;
                    this.style.backgroundImage = 'url(images/unmute.png)'
                    video.volume = 0;
                    volume.firstElementChild.style.height = '0';
                } else {
                    video.muted = false;
                    this.style.backgroundImage = 'url(images/mute.png)';
                    video.volume = currentVol;
                    volume.firstElementChild.style.height = currentHeig + '%';
                }
            });
          }