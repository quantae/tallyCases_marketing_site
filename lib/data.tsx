import { FeatureList } from "./types";
import {subscriptionPlanValues} from './types';
import { LiaReceiptSolid } from "react-icons/lia";
import { FaMobile, FaUserDoctor } from "react-icons/fa6";
import { BsGraphUpArrow, BsHouseAddFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";




export const featureData: ReadonlyArray<FeatureList> = [
    {
        title: 'Receipt Management',
        icon: <LiaReceiptSolid/>,
        description: 'Effortlessly generate, organize and create detailed revenue receipts for every service provided, allowing you to track income sources and financial performance accurately',
    },
    {
        title: 'Clinician Tracking',
        icon: <FaUserDoctor className=""/>,
        description: 'Track referrals with clinicians who bring patients to your center. With our clinician tracking feature, you can easily monitor referral sources and analyze clinician contributions.'
    },
    {
        title: 'Multi-Branch Control',
        icon:<BsHouseAddFill/>,
        description: 'Easily manage multiple business branches independently, allowing you to streamline operations and keep each branch’s data separate while maintaining centralized control.'
    },
    {
        title: 'Multi-User Access',
        icon:<FaUsers/>,
        description: 'Enable your team to work together with secure, role-based access ensuring that only authorized personnel can access sensitive data from front desk to management.'
    },
    {
        title: "Intuitive Dashboard",
        icon: <BsGraphUpArrow />,
        description:
          "Monitor your business with our intuitive dashboard. Gain valuable insights into revenue and referral trends, all at a glance to present complex data in an easy-to-understand format.",
      },
      {
        title: "Mobile Friendliness",
        icon: <FaMobileAlt/>,
        description:
          "Access and manage your business on the go with. Enjoy a seamless user experience across all devices and to stay connected whether you're at your desk or on the move.",
      },

]


export const pricingData: ReadonlyArray<subscriptionPlanValues> = [
{
    subscriptionPlan: 'Basic',
    amount: '$9.99',
    planFeatures: [
        'Unlimited Invoices and Receipts.',
        'Multiple business Branches',
        'Multiple users',
        'Account Dashboard to track sales and payments'
    ]
},
{
    subscriptionPlan: 'Pro',
    amount: '$14.99',
    planFeatures: [
        'Unlimited Invoices and Receipts.',
        'Multiple business Branches',
        'Multiple users',
        'Account Dashboard to track sales and payments',
        'Clinician Monitoring.',
        'Dashboard monitoring for clinicians.'
    ]
}
]
