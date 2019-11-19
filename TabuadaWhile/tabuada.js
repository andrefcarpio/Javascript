/**
 * Super exemplo magico de uso laço for
 * @author André Carpio
 * 
 */
let i = 1

while (i <= 10) {
    let j = 1
    document.write( '| ' + '----------------------------------------'+ '                       |' + "<br>" )
    document.write('| ' +'Tabuada do ' + i + '                       |'+ "<br>" )
   

    while (j <= 10) {

        document.write('| ' + i + " x " + j + " = " + i * j + '                       |' + "<br>"  )
        j++
        

    }

    
    i++

}



/** 

switch (i) {
    case 1:
        document.write("<br>" + '----------------------------------------' + "<br>" + "<br>")
        break

    case 2:
        document.write("<br>" + '*****************************************' + "<br>" + "<br>")
        break

    case 3:
        document.write("<br>" + '.........................................' + "<br>" + "<br>")
        break

    case 4:
        document.write("<br>" + '/////////////////////////////////////////' + "<br>" + "<br>")
        break

    case 5:
        document.write("<br>" + '#########################################' + "<br>" + "<br>")
        break

    default:
        document.write("<br>" + '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&' + "<br>" + "<br>")
        break
}
*/