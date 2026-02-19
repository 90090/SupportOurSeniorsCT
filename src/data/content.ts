export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  imageSrc?: string;
}

export const services: Service[] = [
  {
    id: 'financial-support',
    title: 'Financial Support Services',
    description: 'Determine current cash needs. Perform Basic Budgeting. Establish record-keeping systems for financial transactions.',
    details: `
      <p>Managing finances can become overwhelming with age and/or mental health challenges,
      especially when bills, benefits, and paperwork start to pile up. Our Daily Money
      Management and financial support services are designed to protect independence, reduce
      errors, and give families peace of mind. We help with:</p>
      <ul>
        <li>● Bill paying and expense organization</li>
        <li>● Budgeting and cash-flow planning</li>
        <li>● Organizing financial documents and records</li>
        <li>● Reviewing insurance statements and recurring expenses</li>
        <li>● Identifying potential financial risks or concerns</li>
        <li>● Managing the recovery from fraud instances and ensuring best measures are in place to prevent future occurrences.</li>
      </ul>
      <p>Our role is not to replace legal or financial advisors, but to act as a trusted advocate —
      ensuring nothing falls through the cracks and that seniors understand what is happening with
      their money.</p>
    `,
    icon: `<svg preserveAspectRatio="xMidYMid meet" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg"><defs><style>#comp-l8j3bmnb__item-j9r9uz7e svg [data-color="1"] {fill: #2B074D;}</style></defs>
    <g>
        <path d="M145.5 180h-91c-7.719 0-14-6.242-14-13.913V33.913C40.5 26.242 46.781 20 54.5 20h91c7.719 0 14 6.242 14 13.913v132.174c0 7.671-6.281 13.913-14 13.913zm-91-153.043c-3.861 0-7 3.12-7 6.957v132.174c0 3.837 3.139 6.957 7 6.957h91c3.861 0 7-3.12 7-6.957V33.913c0-3.837-3.139-6.957-7-6.957h-91z" fill="currentcolor" data-color="1"></path>
        <path d="M145.5 166.087h-91v-80h91v80zm-84-6.957h77V93.043h-77v66.087z" fill="currentcolor" data-color="1"></path>
        <path d="M145.5 79.13h-91V37.391h91V79.13zm-84-6.956h77V44.348h-77v27.826z" fill="currentcolor" data-color="1"></path>
        <path fill="currentcolor" d="M89.5 89.565v73.043h-7V89.565h7z" data-color="1"></path>
        <path fill="currentcolor" d="M117.5 89.565v73.043h-7V89.565h7z" data-color="1"></path>
        <path fill="currentcolor" d="M142 110.435v6.957H58v-6.957h84z" data-color="1"></path>
        <path fill="currentcolor" d="M114 134.783v6.957H58v-6.957h56z" data-color="1"></path>
    </g>
</svg>`,
    imageSrc: '/servicecards/FinancialServices.webp',
  },
  {
    id: 'medical-support',
    title: 'Medical Support Services',
    description: 'Provide support, in a professional and compassionate manner, to assist in relieving stress caused by household and financial tasks.',
    details: `
      <p>Healthcare can be confusing, time-consuming, and emotionally draining for seniors and
      caregivers alike. We serve as an advocate and support system to help clients navigate
      medical care with confidence.</p>
      <p>Medical support services include:</p>
      <ul>
        <li>● Attending medical appointments as an advocate</li>
        <li>● Taking notes and helping interpret medical information</li>
        <li>● Coordinating communication between providers</li>
        <li>● Assisting with medication organization and reminders</li>
        <li>● Helping families understand care recommendations</li>
      </ul>
      <p>Our focus is ensuring seniors feel heard, supported, and empowered when it comes to their
      health and taking the responsibilities from family members so they may focus on what matters
      most.</p>
    `,
    icon: `<svg preserveAspectRatio="xMidYMid meet" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg"><defs><style>#comp-l8j3bmnb__item-l8lsk95n svg [data-color="1"] {fill: currentcolor;}</style></defs>
    <g>
        <path d="M78.529 40.498c.067.073.137.143.21.21a3.466 3.466 0 0 0-.21.21 3.466 3.466 0 0 0-.21-.21 4.16 4.16 0 0 0 .21-.21m0-8.081l-2.932 5.36-5.36 2.932 5.36 2.932L78.529 49l2.932-5.36 5.36-2.932-5.36-2.932-2.932-5.359z" fill="currentcolor" data-color="1"></path>
        <path d="M57.529 62.498c.067.073.137.143.21.21a3.466 3.466 0 0 0-.21.21 3.466 3.466 0 0 0-.21-.21 4.16 4.16 0 0 0 .21-.21m0-8.081l-2.932 5.36-5.36 2.932 5.36 2.932L57.529 71l2.932-5.36 5.36-2.932-5.36-2.932-2.932-5.359z" fill="currentcolor" data-color="1"></path>
        <path d="M135.555 80.939a2.506 2.506 0 0 0-.423-.659c-7.076-10.601-19.119-17.613-32.778-17.68-.03 0-.059-.005-.089-.005l-.033.002-.073-.002c-13.741 0-25.866 7.034-32.975 17.688-.17.196-.317.412-.42.654a39.353 39.353 0 0 0-6.208 20.637c-.055.206-.093.418-.093.641s.039.435.093.641c.066 4.091.77 8.025 1.991 11.727l1.29-1.106 3.205-1.221a34.486 34.486 0 0 1-1.401-7.541h15.222c.013.758.056 1.497.09 2.242l1.246-.475h3.749c-.029-.589-.072-1.18-.085-1.767h11.799v5.853l5 1.842v-7.695h12.433a68.004 68.004 0 0 1-1.715 13.718h-6.032l.207.289 10.206 4.711h9.726a35.034 35.034 0 0 1-4.813 5.04l.618.741h5.246l1.449-.966c6.092-6.966 9.794-16.072 9.794-26.033a39.388 39.388 0 0 0-6.226-21.276zM82.928 99.715H67.64a34.396 34.396 0 0 1 4.842-15.305h12.649c-1.21 4.831-1.964 10.072-2.203 15.305zm3.673-20.305H76.145A34.699 34.699 0 0 1 91.57 69.258c-1.969 2.763-3.635 6.244-4.969 10.152zm13.058 20.305H87.926c.251-5.65 1.081-10.83 2.295-15.305h9.438v15.305zm0-20.305h-7.812c2.161-5.622 4.963-9.564 7.812-11.099V79.41zm5-11.205c2.96 1.453 5.931 5.465 8.229 11.206h-8.229V68.205zm0 31.51V84.41h9.927c1.282 4.497 2.166 9.685 2.435 15.305h-12.362zm8.465-30.33a34.705 34.705 0 0 1 15.049 10.025h-10.01c-1.369-3.852-3.064-7.283-5.039-10.025zm6.575 15.025h12.138a34.38 34.38 0 0 1 4.842 15.305H122.02c-.254-5.241-1.056-10.48-2.321-15.305zm13.034 34.023h-12.139c.893-4.218 1.414-8.841 1.498-13.718h14.587a34.368 34.368 0 0 1-3.946 13.718z" fill="currentcolor" data-color="1"></path>
        <path d="M153.988 135.117c-.646-2.905-3.201-4.527-3.49-4.703l-.178-.098c-8.274-4.137-15.115.614-18.281 4.476l-7.087-.238c-1.25-5.128-10.352-8.86-16.682-10.867l-2.615-5.229a2.995 2.995 0 0 0-1.341-1.341c-.398-.199-9.812-4.897-14.74-6.54-5.53-1.842-19.013 4.539-23.014 6.54-.161.08-.314.175-.458.283l-5.784 4.337-32.385 5.191a2.968 2.968 0 0 0-1.384.625 2.496 2.496 0 0 0-.377 4.869c2.004.601 7.82 3.045 8.246 6.282.106.811-.415 1.95-.966 3.156-1.04 2.272-2.462 5.384-.678 8.954 1.452 2.905 3.735 4.41 5.57 5.619.982.647 1.831 1.207 2.373 1.844 1.344 1.58.643 3.93-.413 6.839-.746 2.054-1.39 3.829-.44 5.436.355.6.922.995 1.548 1.151.354.183.742.299 1.144.299.357 0 .719-.077 1.063-.238 6.378-3.001 12.927-6.872 19.259-10.614 5.933-3.506 12.059-7.126 17.952-9.969 1.604.521 3.121 1.012 4.58 1.483 7.517 2.431 13.454 4.351 21.834 7.398 2.721.989 8.256.585 8.949.453 16.937-3.226 27.079-11.932 33.139-17.134 1.162-.997 2.164-1.857 2.955-2.444l.589-.62c1.406-2.108 1.381-3.991 1.112-5.2zm-5.084 2.109c-.833.647-1.77 1.451-2.829 2.36-5.682 4.877-15.191 13.04-30.788 16.011-.955.145-5.087.218-6.334-.235-8.464-3.078-14.439-5.01-22.004-7.457-1.741-.563-3.564-1.153-5.52-1.79l-1.838.115c-6.377 3.001-12.925 6.871-19.256 10.613-4.872 2.879-9.873 5.829-14.769 8.369.957-2.935 1.745-6.903-1.039-10.176-1.003-1.18-2.237-1.993-3.43-2.779-1.608-1.06-2.998-1.976-3.85-3.681-.682-1.363-.185-2.588.752-4.638.783-1.711 1.67-3.651 1.376-5.887-.344-2.617-1.919-4.686-3.814-6.27L62 127.544c.48-.077.936-.27 1.325-.562l6.159-4.619c7.833-3.888 16.297-6.727 18.193-6.094 3.698 1.232 10.61 4.57 13.063 5.773l2.737 5.475a3.001 3.001 0 0 0 1.821 1.532c7.116 2.135 13.084 5.332 13.804 6.828.004.707.037 1.412.071 2.099.048.98.119 2.42-.042 2.986-.274.063-1.066.157-2.817-.193-7.48-1.496-19.847-7.65-19.971-7.712a3 3 0 0 0-2.683 5.366c.536.268 13.208 6.575 21.477 8.229.966.193 2.112.373 3.286.373 1.639 0 3.334-.351 4.675-1.505 1.822-1.57 2.141-3.775 2.131-5.955l7.948.267 2.159-1.104c.532-.784 5.385-7.523 12.63-4 .25.178.993.801 1.142 1.472.026.121.099.45-.204 1.026z" fill="currentcolor" data-color="1"></path>
    </g>
</svg>`,
    imageSrc: '/servicecards/MedicalSupport.webp',
  },
  {
    id: 'household-support',
    title: 'Household Support Services',
    description: 'Serve independent and dependent seniors living at home who have become overwhelmed or unable to maintain their household.',
    details: `
      <p>A safe, organized home environment is essential for aging in place. We assist with the day-to-
      day tasks that can become challenging over time — helping seniors remain comfortable and
      independent in their own homes.</p>
      <p>Household support map include:</p>
      <ul>
        <li>● Coordinating home maintenance and repairs</li>
        <li>● Organizing paperwork, mail, and household systems</li>
        <li>● Assisting with errands and appointments</li>
        <li>● Helping create routines that support daily living</li>
      </ul>
      <p>This service is ideal for seniors who want to stay at home but need extra support managing
      household responsibilities.</p>
    `,
    icon: `<svg preserveAspectRatio="xMidYMid meet" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg"><defs><style>#comp-l8j3bmnb__item-j9r9uxns svg [data-color="1"] {fill: currentcolor;}
#comp-l8j3bmnb__item-j9r9uxns svg [data-color="2"] {fill: currentcolor;}</style></defs>
    <g>
        <path d="M176.3 95.7c-.9 0-1.9-.3-2.7-1L100 31.9 26.4 94.7c-1.7 1.5-4.3 1.3-5.7-.4-1.5-1.7-1.3-4.3.4-5.7l76.3-65c1.5-1.3 3.8-1.3 5.3 0l76.3 65c1.7 1.5 1.9 4 .4 5.7-.8.9-2 1.4-3.1 1.4z" fill="currentcolor" data-color="1"></path>
        <path d="M58.3 90.4c-1 0-1.9-.4-2.6-1.2-1.2-1.4-1.1-3.5.4-4.8l41.7-35.5c1.3-1.1 3.2-1.1 4.4 0l41.7 35.5c1.4 1.2 1.6 3.3.4 4.8-1.2 1.4-3.4 1.6-4.8.4L100 55.9 60.5 89.6c-.6.5-1.4.8-2.2.8z" fill="currentcolor" data-color="1"></path>
        <path d="M38.9 177.5c-2.3 0-4.1-1.8-4.1-4.1V78.9c0-2.2 1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1v94.6c0 2.2-1.9 4-4.1 4z" fill="currentcolor" data-color="1"></path>
        <path d="M161.1 177.5c-2.3 0-4.1-1.8-4.1-4.1V78.9c0-2.2 1.8-4.1 4.1-4.1s4.1 1.8 4.1 4.1v94.6c0 2.2-1.8 4-4.1 4z" fill="currentcolor" data-color="1"></path>
        <path d="M177.4 177.5H22.6c-2.3 0-4.1-1.8-4.1-4.1 0-2.2 1.8-4.1 4.1-4.1h154.8c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1z" fill="currentcolor" data-color="1"></path>
        <path d="M128.5 177.5h-57c-2.3 0-4.1-1.8-4.1-4.1V137c0-17.9 14.6-32.4 32.6-32.4s32.6 14.5 32.6 32.4v36.5c0 2.2-1.8 4-4.1 4zm-52.9-8.1h48.9V137c0-13.4-11-24.3-24.4-24.3S75.6 123.6 75.6 137v32.4z" fill="currentcolor" data-color="1"></path>
        <path d="M100 155.9c-1.9 0-3.4-1.5-3.4-3.4v-18.9c0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4v18.9c0 1.9-1.5 3.4-3.4 3.4z" fill="currentcolor" data-color="2"></path>
        <path d="M109.5 146.4h-19c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4h19c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4z" fill="currentcolor" data-color="2"></path>
    </g>
</svg>`,
    imageSrc: '/servicecards/HouseHoldSupport.webp',
  },
  {
    id: 'conservator-services',
    title: 'Conservator Services',
    description: 'Serve as a Conservator in cases including: when a Power of Attorney does not exist, there is no immediate family, or family is unable to serve.',
    details: `
      <p>When conservatorship becomes necessary, families are often navigating one of the most
      difficult and emotional decisions of their lives. Supporting Our Seniors provides steady,
      experienced guidance to ensure responsibilities are handled properly, compassionately, and
      in full compliance with Probate Court requirements.</p>
      <p>Whether serving directly as Conservator or supporting a family member in that role, we provide:</p>
      <ul>
        <li>● Experienced, court-informed leadership in all aspects of conservatorship</li>
        <li>● Management of Probate Court filings, reporting, and compliance</li>
        <li>● Thoughtful financial oversight and decision-making in the client's best interest</li>
        <li>● Day-to-day coordination and documentation to ensure continuity of care</li>
        <li>● Organization and maintenance of financial and personal records</li>
        <li>● Clear, respectful communication among the conserved individual, family members, medical providers, and financial professionals</li>
        <li>● Hands-on advocacy to safeguard the dignity, well-being, and rights of the individual</li>
        <li>● Responsible financial management with timely and accurate reporting to the Probate Court</li>
      </ul>
      <p>Our approach is relationship-based and deeply personal. We work directly with the conserved
      individual whenever possible and maintain open communication with families — ensuring
      every decision reflects care, accountability, and respect.</p>
    `,
    icon: `<svg preserveAspectRatio="xMidYMid meet" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg"><defs><style>#comp-l8j3bmnb__item-lsot4c4c svg [data-color="1"] {fill: currentcolor;}</style></defs>
    <g>
        <path d="M173.989 102.39l-.05-.944-1.099-1.057-25.776-42.482-3.907.056v-.056h-39.852V52.07l.173-.056c2.908-1.223 4.956-4.115 4.956-7.451 0-4.448-3.634-8.062-8.116-8.062-4.488 0-8.121 3.614-8.121 8.062 0 3.337 2.043 6.228 4.956 7.451l.296.111v5.782H55.7l-3.628.056-25.078 42.705-.854.779-.039.723-.1.167.089.054v.167c0 15.903 12.977 28.86 28.974 28.86 15.991 0 28.974-12.956 28.974-28.86l-.005-.167-.056-.944-1.1-1.057-22.243-36.644H97.45l.005 80.181H64.792c-2.707 0-4.873 2.224-4.873 4.838v9.897c0 2.669 2.166 4.838 4.873 4.838h71.131c2.69 0 4.878-2.169 4.878-4.838v-9.897c0-2.67-2.188-4.838-4.878-4.838h-32.618V63.746h35.331l-21.667 36.865-.865.834-.039.723-.1.167.089.054v.167c0 15.903 12.977 28.86 28.968 28.86 15.997 0 28.979-12.956 28.979-28.86l-.012-.166zM75 98.666H34.93l19.708-33.529L75 98.666zm49.894 0l19.708-33.529 20.356 33.529h-40.064z" fill="currentcolor" data-color="1"></path>
    </g>
</svg>`,
    imageSrc: '/servicecards/ConservatorServices.webp',
  },
  {
    id: 'caregiver-support',
    title: 'Family Caregiver Support',
    description: 'Serve independent and dependent seniors and their families as they progress through the aging process.',
    details: `
      <p>Caring for an aging loved one can be rewarding — but also exhausting. Our family caregiver
      support services are designed to reduce burnout, provide guidance, and ensure caregivers
      are not navigating this journey alone.</p>
      <p>Caregiver support may include:</p>
      <ul>
        <li>● Guidance and education on aging-related challenges</li>
        <li>● Help coordinating care and services</li>
        <li>● Emotional support and problem-solving</li>
        <li>● Acting as a liaison between caregivers and professionals</li>
      </ul>
      <p>By supporting caregivers, we help create healthier, more sustainable care environments.</p>
      <p>A complimentary consultations with the client and family is
        always provided to determine and discuss challenges, family dynamics, needs
        and expectations of the client and family. This complimentary session
        allows us to provide the most robust plan moving forward and is individually created based
        upon the situation.</p>
      <p>Services are offered on a short or long term basis, personally structured and scheduled to
          meet the specific requirements of the individual client. In addition, the services provided can
          be adjusted or expanded as the client's progressive financial and personal requirements
          evolve</p>
    `,
    icon: `<svg preserveAspectRatio="xMidYMid meet" viewBox="20 20 160 160" xmlns="http://www.w3.org/2000/svg"><defs><style>#comp-l8j3bmnb__item1 svg [data-color="1"] {fill: currentcolor;}</style></defs>
    <g>
        <path fill="currentcolor" d="M167.239 99.089h-19.032c2.755-4.717 4.23-10.093 4.23-15.704 0-17.224-14.013-31.236-31.237-31.236-7.879 0-15.307 2.896-21.078 8.186-5.806-5.441-13.321-8.42-21.324-8.42-17.224 0-31.236 14.013-31.236 31.236a31.181 31.181 0 006.041 18.455H32.761a1.5 1.5 0 100 3H81.48a1.5 1.5 0 001.414-.999l3.263-9.215 8.143 23.055a1.5 1.5 0 001.414 1l.077-.002a1.498 1.498 0 001.381-1.145l7.93-32.657 6.543 24.512a1.5 1.5 0 002.647.517l5.723-7.582h22.327c-.417.47-.845.933-1.296 1.379l-40.989 40.994-27.887-27.979a1.5 1.5 0 10-2.125 2.117l28.948 29.044a1.5 1.5 0 001.062.441h.001c.398 0 .779-.158 1.061-.439l42.045-42.051a31.817 31.817 0 003.062-3.506h21.016a1.5 1.5 0 10-.001-3.001zm-47.972 0c-.471 0-.914.221-1.197.597l-4.32 5.724-7.268-27.227a1.5 1.5 0 00-1.449-1.113h-.017a1.498 1.498 0 00-1.44 1.146l-8.128 33.472-7.874-22.294a1.5 1.5 0 10-2.828-.001l-4.325 12.213H57.444a28.18 28.18 0 01-6.881-18.455c0-15.569 12.667-28.236 28.236-28.236 7.684 0 14.872 3.038 20.238 8.556a1.5 1.5 0 001.067.454c.443-.026.789-.157 1.072-.442 5.34-5.374 12.452-8.333 20.025-8.333 15.57 0 28.237 12.667 28.237 28.236 0 5.678-1.665 11.095-4.764 15.704h-25.407z" data-color="1"></path>
    </g>
</svg>`,
    imageSrc: '/servicecards/CaregiverSupport.webp',
  },
  {
    id: 'life-transition',
    title: 'Downsizing and Life Transition Services',
    description: 'Help Seniors navigate the emotional and logistical challenges of downsizing, moving, or transitioning to a new living situation.',
    details: `
      <p>Making the decision of when to downsize — and determining the best path forward — can feel
        overwhelming. At Supporting Our Seniors, we provide steady guidance, thoughtful planning,
        and hands-on assistance from beginning to end, ensuring each transition is handled with
        clarity, dignity, and care.</p>
      <p>Since our founding in 2022, we have successfully guided more than thirty families through
        downsizing and major life transitions — including the coordinated sale of over a dozen
        properties as part of comprehensive transition planning. Our experience allows us to
        anticipate challenges, protect financial interests, and ensure each step is managed
        thoughtfully and efficiently.</p>
      <p>Our services include:</p>
      <ul>
        <li>● Comprehensive assessment to provide professional guidance based on each client's unique circumstances, goals, and financial considerations</li>
        <li>● Personalized transition planning, whether remaining at home with modifications,
            seeking a smaller residence, exploring independent living, assisted living, or memory
            care</li>
        <li>● Financial transition guidance to support informed and confident decision-making</li>
        <li>● Coordination of trusted professionals, including realtors, contractors, clean-out
            services, and other necessary providers</li>
        <li>● Oversight of the entire process to ensure clients retain the maximum financial benefit
            available during the transition</li>
      </ul>
      <p>We understand that downsizing is more than a move — it is a significant life change. Our role
      is to reduce stress, provide clarity, and safeguard both emotional and financial well-being
      every step of the way.</p>
    `,
    icon: `<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <g fill="currentcolor" data-color="1">
    <!-- Left (big) house -->
    <path d="M10 98l32-32 32 32v52H10z"/>
    <rect x="24" y="118" width="22" height="32" rx="1"/>

    <!-- Arrow -->
    <path d="M78 114 h44" stroke="currentcolor" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M112 102 l14 12 -14 12" stroke="currentcolor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

    <!-- Right (smaller) house -->
    <path d="M130 112l26-26 26 26v38h-52z"/>
    <rect x="143" y="128" width="16" height="22" rx="1"/>
  </g>
</svg>`,
    imageSrc: '/servicecards/GetinTouch.webp',
  },
];

export const aboutContent = {
  title: 'Who We Are',
  subtitle: 'About Us',
  content: `
    <p>Supporting our Seniors, LLC, was founded in November 2022 by Tamath Rossi, who has over two decades of experience in the senior service industry as an advocate forming strong relationships with the area healthcare community to help with resources, as well as having an understanding and compassion to provide a solid support system to clients and their families as they navigate through the many transitions and evolutions of the aging experience. Supporting Our Seniors is a multifaceted and comprehensive service that extends well beyond basic assistance and possible placement in appropriate facilities or bringing services to the client's home. Tamath also has 30 years of experience as a paralegal. She has the knowledge and experience to know when an attorney needs to be connected to a client and has a vast network of attorney colleagues representing varied areas of experienced practice to recommend a good match to clients.</p>
    
    <p>Prior to Supporting Our Seniors, Tamath served as the Director of Senior Services for the Town of Southbury serving over 37 percent of Southbury's population. She also served as the Municipal Veteran Representative and Southbury's Municipal Agent, documenting over 3,500 seniors and families assisted during her tenure. Her work included support during a devastating tornado and the COVID pandemic. Her creation and implementation of a touchless grocery brigade service provided over 863 grocery orders totaling $78,405.03 over 45 days, positively impacting and flattening the curve of the pandemic's effect on the senior community and her creation of weekly updates during the pandemic recognized and addressed the isolation being experienced by the seniors in the community.</p>

    <p>Tamath’s experience, training, ongoing education, and passion have provided countless clients of Supporting Our Seniors and their families with varied support.  Since opening, she has assisted many families and seniors in navigating the initial stages of significant aging and illness diagnoses, including but not limited to ALZ/dementia, strokes, and TIAs.</p>

    <p>She is also a Certified Dementia Practitioner, a Daily Money Manager, and a member of the American Association of Daily Money Managers. With her background, she can recognize the diagnosis and inform the family of the onset of cognitive issues with a loved one, and provide support in the assessment and continuing life adjustment, including recommendations and coordination of support and services. She also can provide long-term and ongoing support to seniors and families with all aspects of their finances, including budgeting, banking management, bill paying, overall finances, and household expenses.</p>

    <p>While Tamath provides knowledge, training, experience, and a network of resources, she continues building her knowledge through constant and monthly continuing education sessions to provide the most robust and current support system to the clients of Supporting Our Seniors and their families.

No situation is too small or big. If you're unsure of what to do next, contact Supporting Our Seniors for a complimentary intake and discussion of your current situation.</p>
  
   `,
};