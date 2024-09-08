function vibr(dur){
            if (navigator.vibrate) {
                navigator.vibrate(dur);
            } else {
                console.log("NotSupported");
            }
        }
