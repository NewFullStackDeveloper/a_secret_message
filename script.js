
function onload() {
    document.querySelector('.message').style.display="none";

    document.getElementById('image').addEventListener('mouseenter', function() {
        document.querySelector('.message').style.display="block";
    });

    document.getElementById('image').addEventListener('mouseleave', function() {        
        document.querySelector('.message').style.display="none";
    });
}


    
    
