export const GDSC_POSITIONS = [
  "student",
  "alumni",
  "mentor",
  "president",
  "staff",
  "instructor",
  "other",
] as const;

export const GDSC_BRANCHES = [
  "project",
  "interview",
  "marketing",
  "other",
] as const;

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
  total_points?: number;
  role: "USER" | "ADMIN";
  position: (typeof GDSC_POSITIONS)[number];
  branch: (typeof GDSC_BRANCHES)[number];
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  discord?: string;
  bio?: string;
  tags?: string[];
  website?: string;
}
