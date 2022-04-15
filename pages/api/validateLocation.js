import sign from "../../lib/signGoogleMapURL";

export default function ValidateLocation(req, res) {
    let location = req.body.location;

    try {
        const uriEncodedLocation = encodeURIComponent(location);
        const unsignedGoogleMapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${uriEncodedLocation}&zoom=12&size=400x400&key=${process.env.GOOGLE_MAP_STATIC_API_KEY}`;
        const signature = sign(unsignedGoogleMapURL, process.env.GOOGLE_MAP_STATIC_API_SECRET);

        setTimeout(() => {
            res.status(200).json({
                data: {
                    validatedLocation: location,
                    mapImageSrc: `${signature}`
                }
            })
        }, 2000)
    } catch (error) {
        res.status(404).json({
            error
        })
    }
}