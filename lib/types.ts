

export interface FeatureList {
    icon?: React.ReactNode;
    title: string;
    description: string;
}

export interface SignUpFormValues {
   businessRepFirstName: string;
    businessRepLastName: string;
    businessRepEmail: string;
    businessName: string;
    country: string;
    businessSubdomain: string;
    businessPhoneNumber: string;
    trialPlan?: string;
  }

  export interface subscriptionPlanValues {
    trialPlan: string,
    amount: string,
    planFeatures: Array<string>
  }