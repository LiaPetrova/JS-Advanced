function createAssemblyLine() {
    let object = {
        hasClima(par) {
            par.temp = 21;
            par.tempSettings = 21;
            par.adjustTemp = () => {
                if (par.temp < par.tempSettings) {
                    par.temp++;
                } else if (par.temp > par.tempSettings) {
                    par.temp--;
                }
            };
        },
        hasAudio(par) {
            par.currentTrack = {
                    name: null,
                    artist: null
                },
                par.nowPlaying = function() {
                    if (par.currentTrack.name) {
                        console.log(`Now playing '${par.currentTrack.name}' by ${par.currentTrack.artist}`);
                    }
                }
        },
        hasParktronic(par) {
            par.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }
    };

    return object;
    // return obj;
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: "Toyota",
    model: "Avensis",
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
myCar.checkDistance(5);
myCar.checkDistance(0.49);