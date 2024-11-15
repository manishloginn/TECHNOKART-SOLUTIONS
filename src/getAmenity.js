import Person3Icon from '@mui/icons-material/Person3';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const getAmenity = (amenity) => 
{
    switch (amenity) {
        case "user":    
        return <Person3Icon style={{ color: "grey", fontSize:"50px" }}  />
          
        case "happy":    
        return <SentimentVerySatisfiedIcon style={{ color: "grey", fontSize:"50px" }}  />
          
        case "meeting":    
        return <EmojiFoodBeverageIcon style={{ color: "grey", fontSize:"50px" }}  />

               
        case "right":    
        return <TaskAltIcon style={{ color: "grey", fontSize:"50px" }}  />
          

            default:
                return null;
    }
}

export default getAmenity