export type RatingType = {
    hotelId: string,
    overallRating: number,
    type: string,
    sentiments?: {
        catering: number;
        facilities: number;
        internet: number;
        location: number;
        staff: number;
        valueForMoney: number;
    }

}