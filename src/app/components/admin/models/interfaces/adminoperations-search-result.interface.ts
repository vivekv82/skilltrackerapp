export interface TechnicalSkillName {
  skillName:string, 
  skillExpertiseLevel:number
}

export interface SoftSkillName {
  skillName: string, 
  skillExpertiseLevel: number
}

export interface FadDoctorProfileRequestModelInterface {
  geoLocation?: string;
  locationId?: number;
  lastName: string,
  firstName: string,
  associateId: string,
  technicalSkillName: TechnicalSkillName[],
  softSkillName: SoftSkillName[]
}