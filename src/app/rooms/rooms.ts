export interface Room {
  availableRooms?: number;
  bookedRooms: number;
  totalRooms: number;
}
export interface RoomList {
  roomNumber: number;
  roomType: string;
  ameneties: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating: number;
}
