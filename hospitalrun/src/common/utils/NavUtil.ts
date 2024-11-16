export type HospitalRunApp =
  | 'home'
  | 'patientInformation'
  | 'primaryCareDoctor'
  | 'medicalInformation'
  | 'medications'
  | 'appointments'
  | 'privacy'
  |'healingImage'

export const appPathNames: { [key in HospitalRunApp]: string } = {
  home: '/',
  patientInformation: '/patient-information',
  primaryCareDoctor: '/primary-care-doctor',
  medicalInformation: '/medical-information',
  medications: '/medications',
  appointments: '/appointments',
  privacy: '/Privacy',
  healingImage: '/healingImage'
};
