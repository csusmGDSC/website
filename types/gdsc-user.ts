/**
 * Interface representing a GDSC User.
 * @interface GDSCUser
 * @property {string} id - The unique identifier of the user.
 * @property {string} fullName - The full name of the user.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} email - The email of the user.
 * @property {string} [image] - The URL of the user's image.
 * @property {number} total_points - The total points of the user.
 * @property {boolean} isAdmin - Indicates whether the user is an admin or not.
 * @property {string} [github] - The GitHub URL of the user.
 * @property {string} [linkedin] - The LinkedIn URL of the user.
 * @property {string} [instagram] - The Instagram URL of the user.
 * @property {string} [twitter] - The Twitter URL of the user.
 * @property {string} [bio] - The bio of the user.
 * @property {string[]} [tags] - An array of tags associated with the user.
 */
export interface GDSCUser {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  total_points: number;
  isAdmin: boolean;
  role: "USER" | "ADMIN";
  position:
    | "student"
    | "alumni"
    | "mentor"
    | "president"
    | "instructor"
    | "other";
  branch: "project" | "interview" | "marketing" | "other";
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  bio?: string;
  tags?: string[];
}
