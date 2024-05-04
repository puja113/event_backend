import createEvent from "../model/create_event.model.js";


export const getEventDetailsById = async (req, res) => {
    try {
      
        const {userId} = req.query;
        

       
        const eventDetails = await createEvent.findById(userId);

        if (eventDetails) {
           // console.log("user detailssss", userDetails)
            return res.status(200).json({ status: true, events:eventDetails });
        } else {
            return res.status(404).json({ status: false, message: 'eventDetails not found' });
        }

    } catch (error) {
        console.error('Error fetching eventDetails :', error);
        return res.status(500).json({ status: false, error: 'Internal server error' });
    }
};
