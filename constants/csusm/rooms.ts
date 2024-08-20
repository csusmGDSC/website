// These are all the rooms that could host events. The availability cannot be determined yet programmatically.

import { CSUSM_ROOM } from "@/types/gdsc-event";

export const CSUSM_ROOMS: CSUSM_ROOM[] = [
  // ACCURATE INFORMATION DERIVED FROM https://www.csusm.edu/summerconferences/meethereplayhere/spacesizescapacity.html
  {
    building: "Academic Hall",
    room: 102,
    type: "auditorium",
    capacity: 145,
  },
  {
    building: "Arts Building",
    room: 111,
    type: "auditorium",
    capacity: 150,
  },
  {
    building: "Arts Building",
    room: 240,
    type: "auditorium",
    capacity: 250,
  },
  {
    building: "Markstein Hall",
    room: 125,
    type: "auditorium",
    capacity: 120,
  },
];
