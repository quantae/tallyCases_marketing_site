export interface FeatureList {
    title: string;
    description: string;
}

export interface SignUpFormValues {
   businessRepFirstName: string;
    businessRepLastName: string;
    businessRepEmail: string;
    businessName: string;
    businessSubdomain: string;
    businessPhoneNumber: string;
    subscriptionPlan?: string;
  }

  export interface subscriptionPlanValues {
    subscriptionPlan: string,
    amount: string,
    planFeatures: Array<string>
  }