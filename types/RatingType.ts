export type RatingType = {
    hotelId: string,
    overallRating: number,
    type: string,
    sentiments?: {
        staff: number,
        location: number,
        service: number,
        roomComforts: number,
        internet: number,
        sleepQuality: number,
        valueForMoney: number,
        facilities: number,
        catering: number,
        pointsOfInterest: number
    }

}