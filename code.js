calculatrice = {};

calculatrice.init = function()
{
let x;
number=[];

    let corps = document.createElement("div");
    corps.id = "corps"
    document.getElementById("body").appendChild(corps);

    let afficheur = document.createElement("div");
    afficheur.id = "afficheur"
    document.getElementById("corps").appendChild(afficheur);

    let pavnum = document.createElement("div");
    pavnum.id = "pavnum"
    document.getElementById("corps").appendChild(pavnum);
    
    for (i=9; i>=0; i--)
    {
        let num = document.createElement("button");
        num.id = "touchenum"+i
        num.className ="nombre"
        document.getElementById("pavnum").appendChild(num);
        document.getElementById("touchenum"+i).innerHTML = i
        document.getElementById("touchenum"+i).setAttribute("onclick",'calculatrice.calcul('+i+');');  
    }

    let virgule = document.createElement("button");
    virgule.id = "virgule"
    document.getElementById("pavnum").appendChild(virgule);
    document.getElementById("virgule").innerHTML = ","
    document.getElementById("virgule").setAttribute("onclick",'calculatrice.calcul(".");');
    
    let operateurs = document.createElement("div");
    operateurs.id = "operateurs"
    document.getElementById("corps").appendChild(operateurs);
    
    let plus = document.createElement("button");
    plus.id = "plus"
    document.getElementById("operateurs").appendChild(plus);
    document.getElementById("plus").innerHTML = "+";
    document.getElementById("plus").setAttribute("onclick",'calculatrice.calcul("+");');

    let moins = document.createElement("button");
    moins.id = "moins"
    document.getElementById("operateurs").appendChild(moins);
    document.getElementById("moins").innerHTML = "-"
    document.getElementById("moins").setAttribute("onclick",'calculatrice.calcul("-");');

    let multip = document.createElement("button");
    multip.id = "multip"
    document.getElementById("operateurs").appendChild(multip);
    document.getElementById("multip").innerHTML = "X"
    document.getElementById("multip").setAttribute("onclick",'calculatrice.calcul("*");');

    let divis = document.createElement("button");
    divis.id = "divis"
    document.getElementById("operateurs").appendChild(divis);
    document.getElementById("divis").innerHTML = "/"
    document.getElementById("divis").setAttribute("onclick",'calculatrice.calcul("/");');

    let egal = document.createElement("button");
    egal.id = "egal"
    document.getElementById("corps").appendChild(egal);
    document.getElementById("egal").innerHTML = "="
    document.getElementById("egal").setAttribute("onclick",'calculatrice.calcul("=");');

    let efface = document.createElement("button");
    efface.id = "efface"
    document.getElementById("corps").appendChild(efface);
    document.getElementById("efface").innerHTML = "CA"
    document.getElementById("efface").setAttribute("onclick",'calculatrice.calcul("ce");');

    calculatrice.calcul = function(i)
    {
        if (i=="ce")
            {
                document.getElementById("afficheur").innerHTML = "";
                number=[];
            }
        else if (i=="=")
            {
              console.log(eval(x));
              document.getElementById("afficheur").innerHTML = "";
              document.getElementById("afficheur").innerHTML = eval(x);
              onclick = document.getElementById("afficheur").innerHTML = "";
              number=[];

            }
        else
            {
                if (i=="+" || i=="-" || i=="*" || i=="/")
                {
                    document.getElementById("afficheur").innerHTML = "";
                }
            number.push(i);
            document.getElementById("afficheur").innerHTML += i;  
            x = number.join("");
            console.log(x)
            }
            
            
    }
    
}