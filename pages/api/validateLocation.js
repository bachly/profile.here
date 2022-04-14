export default function ValidateLocation(req, res) {
    if (req.body.location.toLowerCase().indexOf('portland') >= 0) {
        res.status(200).json({
            data: {
                validatedLocation: 'Portland, Oregon, USA'
            }
        })
    } else {
        res.status(404).json( )
    }
}