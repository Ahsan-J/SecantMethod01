var x=[];
var index=0;
var Es = false;
var Er = false;
var ret;
function f(value){
    ret = (Math.cos(value)+2*Math.sin(value)+(value*value));
    
    return Number(ret.toFixed(4));
}
function xThird(x0,x1){
    ret = (x1-(f(x1)*(x1-x0)/(f(x1)-f(x0))));
    return  Number(ret.toFixed(4));
}
function absError(){
    if(Math.abs(x[index+1]-x[index])<0.001){
        Es = true;
        return true;
    }
    else{
        Es=false;
        return false;
    }
}
function relError(){
    if(Math.abs((x[index+1]-x[index])/x[index+1])<0.001){
        Er = true;
        return true;
    }
    else{
        Er=false;
        return false;
    }
}
function calculation(){
    x[0] = Number(document.getElementById("lowerBound").value);
    x[1] = Number(document.getElementById("upperBound").value);
    while(index<15){
            if(absError()==true||relError()==true){
                document.getElementById("ans").style.visibility="visible";
                var node = document.createTextNode(xThird(x[index],x[index+1]));
                document.getElementById("ans").appendChild(node);
                break;
            }
        addData();
    }
}
function addData(){
    var table = document.getElementById("data_table");
    var td=[];
    for(var i=0;i<9;i++){
        td[i]=document.createElement("td");
    }        
        x[index+2] = xThird(x[index],x[index+1]);
        tr = document.createElement("tr");
        td[0].innerText = Number(index+1);
        td[1].innerText = x[index];
        td[2].innerText = x[index+1];
        td[3].innerText = Number(f(x[index]));
        td[4].innerText = Number(f(x[index+1]));
        td[5].innerText = x[index+2];
        var x3 = xThird(x[index],x[index+1]);
        if(f(x3)==0){
            
        }
        if((f(x[index])<0 && f(x3)<0)||(f(x[index])>0 && f(x3)>0)){
            x[index]=x3;
        }
        
        if((f(x[index])<0 && f(x3)>0)||(f(x[index])>0 && f(x3)<0)){
            x[index+1]=x3;            
        }
        index++;
        td[6].innerText = Math.abs(x[index+1]-x[index]);
        td[7].innerText = absError();
        td[8].innerText = relError();
        for(var i=0;i<9;i++){
            tr.appendChild(td[i]);
        }    
        table.appendChild(tr);
        
}

function show(){
    document.getElementById("data_table").style.visibility = "visible";
}