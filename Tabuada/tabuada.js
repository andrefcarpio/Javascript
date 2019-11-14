/**
 * Super exemplo magico de uso laço for
 * @author André Carpio
 * 
 */

for (let i = 1; i <= 10; i++) {
    document.write('Tabuada do ' + i + "<br>" + "<br>")
    for (let j = 0; j <= 10; j++) {
        document.write(i + " x " + j + " = " + i * j + "<br>")

    }
    switch (i) {
        case 1 :
            document.write('----------------------------------------' + "<br>")
            break

        case 2:
        document.write('*****************************************' + "<br>")
            break

        case 3:
        document.write('.........................................' + "<br>")
        break

        case 4:
        document.write('/////////////////////////////////////////' + "<br>")
        break

        case 5:
        document.write('#########################################' + "<br>")
        break

        default:
        document.write('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&' + "<br>")
        break
    }
} 
