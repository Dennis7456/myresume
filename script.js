function respond (){
    if(screen.width <= 320){
        document.querySelector('div').className = 'screen-320';
    }
    else if(screen.width <= 360){
        document.querySelector('div').className = 'screen-360';
    }
    else if(screen.width <= 411){
        document.querySelector('div').className = 'screen-411';
    }
    else if(screen.width <= 412){
        document.querySelector('div').className = 'screen-412';
    }
    else if(screen.width <= 600){
        document.querySelector('div').className = 'screen-600';
    }
    else if(screen.width <= 768){
        document.querySelector('div').className = 'screen-768';
    }
    else if(screen.width <= 800){
        document.querySelector('div').className = 'screen-800';
    }
    
    
    
    
    
}
