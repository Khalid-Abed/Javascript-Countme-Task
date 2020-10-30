///////////////////////////////////////////////
function countme(tag,object)
{
    var numofclass=0,
        numofid=0,
        numofname=0,
        ob={};
    var alltag=document.getElementsByTagName(tag);

    ob.all=alltag.length;

    for(var i=0;i<alltag.length;i++)
    {
       
        for (var key in object)
        { 
            // var classes=document.querySelectorAll(`alltag.${object.class}`);
            // console.log(classes);


            if(alltag[i].getAttribute(key).includes())
            {

            }



            if( key === "class")
            {
                numofclass++;
                ob.class=numofclass;
            }
            else if(key === "id")
            {
                numofid++;
                ob.id=numofid;
            }
            else if( key==="name")
            {
                numofname++;
                ob.name=numofname;
            }
           
          
        }
    }
     //console.log('number of tag '+tag.length+' num of class '+numofclass+ ' num of id ' +numofid+ ' num of name '+numofname );
     return ob;
    
}




///////////////////////////// Bouns paragraph to  Links ///////////////////////////////////////////////////
function link(){
    var p1 =document.getElementsByTagName('div')[0];
        var a=document.createElement('a');
        a.innerText=p1.innerText;
        a.setAttribute('href','http://www.google.com');
        p1.parentNode.replaceChild(a,p1);
}