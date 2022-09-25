

function getSpotifyResp(selectedGenre){
    console.log(selectedGenre);
    if(selectedGenre == "eighties"){
        genreEndpoint = "https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe?si=97318a04e8474f63";
        musicObject = musicObject80;

    }else if (selectedGenre == "nineties"){
        genreEndpoint = "https://open.spotify.com/playlist/37i9dQZF1DXbTxeAdrVG2l?si=e733b40a623b4e9d";

    }else if(selectedGenre == "early"){
        genreEndpoint = "https://open.spotify.com/playlist/37i9dQZF1DX4o1oenSJRJd?si=77f2e7b1ceb446d2";

    }else if(selectedGenre == "current"){
        genreEndpoint = "https://open.spotify.com/playlist/37i9dQZF1DX5Ejj0EkURtP?si=50cd62ded1b84956";
        
    }else {
        return "Error: Genre Not Found";
    }
    };

    var genreEndpoint = "https://open.spotify.com/playlist/37i9dQZF1DX4UtSsGT1Sbe?si=97318a04e8474f63";
    const selectedQuestionType = Math.floor(Math.random() * musicObject.tracks.items.length);
    var possibleAnswers = [];
    var musicObjectArr = [];
    var correctAnswerIndex = 0;
    var musicAnsKey = [];
    questionTypes = ["artist_name", "song_name", "song_year", "album_name"];
    reducedMusicObj = [];
    for (i=0;i<musicObject.tracks.items.length;i++){
        var previewURL = musicObject.tracks.items[i].track.preview_url;
        if (previewURL !==null){
            reducedMusicObj.push(musicObject.tracks.items[i]);
        };
    }

    for(let i = 0; i < 5; i++){
        
        var possibleAnswers = [];
        var objectIndex = Math.floor(Math.random() * reducedMusicObj.length);
        var qType = Math.floor(Math.random() * questionTypes.length);
        var triviaQuestion = "";
        if(qType == 0){
            triviaQuestion = "Who sang this song?";
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.artists[0].name);
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            possibleAnswers.splice(randPositionIndex, 0, reducedMusicObj[objectIndex].track.artists[0].name)
        }else if(qType == 1){
            triviaQuestion = "What is the name of this song?";
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.name);
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            possibleAnswers.splice(randPositionIndex, 0, reducedMusicObj[objectIndex].track.name)
        }else if(qType == 2){
            triviaQuestion = "What year was this song made?"
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.album.release_date.substring(0,4));
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            possibleAnswers.splice(randPositionIndex, 0, reducedMusicObj[objectIndex].track.album.release_date.substring(0,4))
        }else if(qType == 3){
            triviaQuestion = "What is the name of this song's album?"
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.album.name);
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            possibleAnswers.splice(randPositionIndex, 0, reducedMusicObj[objectIndex].track.album.name)
        }
        var musicAns = {"id":i, "correctAnswerIndex":correctAnswerIndex};
        var musicObj = {
            "id": i+1,
            "track_image":reducedMusicObj[objectIndex].track.album.images[0].url,
            "artist_name": reducedMusicObj[objectIndex].track.artists[0].name,
            "song_name": reducedMusicObj[objectIndex].track.name, 
            "song_year":reducedMusicObj[objectIndex].track.album.release_date,
            "album_name":reducedMusicObj[objectIndex].track.album.name,
            "qType":qType,
            "triviaQ":triviaQuestion,
            "preview_url":reducedMusicObj[objectIndex].track.preview_url,
            "possible_answers":possibleAnswers
        };
        musicAnsKey.push(musicAns);
        musicObjectArr.push(musicObj);
    };