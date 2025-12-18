import { siteContent } from "../../content/siteContent";
import { HeaderSection } from "../../sections/HeaderSection";
import { Footer } from "../../components/Footer";
import { Container } from "../../components/Container";
import { AnimateIn } from "../../components/AnimateIn";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const growthPlays: Record<
  string,
  {
    title: string;
    content: string;
    image: string;
  }
> = {
  "churn-risk-prevention": {
    title: "Churn risk & prevention",
    image: "/growthplays/churn-risk.jpg",
    content: `Utilize predictive analytics to identify users at risk of disengaging or churning. Implement tailored retention strategies to maintain their interest and loyalty.

## About the Growth Play

Churn risk and prevention is crucial for SaaS companies aiming to retain their user base and maintain steady revenue growth. Churn, or customer attrition, represents the percentage of users who stop using a service over a given period. High churn rates can significantly impact the sustainability and profitability of a subscription-based model, making it essential to implement effective strategies to mitigate this risk.

This use case effectively leverages Intempt's lifecycle agent and automated engagement tools to address the challenges of churn management.

## Benefits

- Early identification of at-risk users: Predict which users will likely churn before they disengage completely.
- Targeted retention strategies: Implement personalized campaigns to re-engage at-risk users.
- Increased customer lifetime value: Retaining users longer by addressing their needs and concerns promptly.
- Improved user experience: Enhance satisfaction by providing timely and relevant interactions.
- Data-driven decision making: Utilize insights from predictive models to make informed marketing and product decisions.

## How it works

### Step 1: Set up data collection

Ensure you have at least 21 days of data collection with a minimum of 10,000 daily events.

Verify that the goal event (e.g., churn) has at least 200 true and 200 false occurrences over 30 days.

Examples of events that can represent churn:
User cancels subscription.
User has not logged in for 30 days.
User reduces usage significantly (e.g., logging in less frequently, using fewer features).
User submits a negative feedback or support ticket indicating dissatisfaction.

### Step 2: Create a lifecycle agent

Navigate to the Agents section in Intempt

Select "Create agent" and choose the target goal event representing user churn.

Configure the Agent.
If necessary, filter out unnecessary users based on login date, feature usage frequency, subscription status, or support ticket submissions.
Train the model using historical data to predict the likelihood of churn.

Intempt will create an output attribute that stores prediction values for each user.

![Step 2 output attribute](/gp/article1/1-min.png)

### Step 3: Segment users based on lifecycle scores
Once trained, the model categorizes users into Champion, Regulars, promising, Needs attention, At risk

### Step 4: Design and implement retention strategies

#### For high-risk users:

**Create a journey:**
Go to the Journeys section and create a new journey.
Name the journey (e.g., "High-Risk User Retention Journey").

![Create journey](/gp/article1/2-min.png)

**Set a trigger:**
Choose a trigger based on the likelihood score (e.g., users with a high likelihood of churning).

![Set trigger](/gp/article1/3-min.png)

**Add actions:**
Send personalized re-engagement emails:
Use the "Send Email" action to create an email campaign offering exclusive discounts or features. Customize the email content using user attributes like first name and recent activity. Example:
Subject: "We miss you! Here's 20% off your next month"
Body: "Hi [First Name], we noticed you haven't logged in recently. As a valued customer, we're offering you a 20% discount on your next month. Use code STAY20 at checkout. We'd love to hear any feedback you have to help us improve your experience."

![Email body example](/gp/article1/4-min.png)

Schedule follow-up calls:
Use the "Send SMS" or "Webhook" action to notify customer success teams to call high-risk users.
Provide them a script to discuss the user's experience and offer assistance.

![Follow-up calls](/gp/article1/5-min.png)

**Add conditions:**
Check email engagement:
Use the "Condition" block to check if users have opened the email or clicked on links.
If not, send a follow-up email after a few days.

![Check email engagement](/gp/article1/6-min.png)

![Email engagement condition](/gp/article1/7-min.png)

Check follow-up call status:
Ensure that follow-up calls were made and track the outcome.
If a user remains unresponsive, escalate to a higher support tier.

**Implement personalizations:**
Create a personalized dashboard message:
Go to the Personalizations section and create a new personalization.
Set the target audience to high-risk users.
Design a message or offer that appears on the user dashboard when they log in. Example:
Message: "Welcome back, [First Name]! We've missed you. Enjoy a 20% discount on your next month with code STAY20."

![Dashboard message](/gp/article1/8-min.png)

#### For medium-risk users:

**Create a journey:**
Go to the Journeys section and create a new journey for medium-risk users
Name the journey (e.g., "Medium-Risk User Engagement Journey").

![Medium-risk journey](/gp/article1/9-min.png)

**Set a trigger:**
Choose a trigger based on the medium likelihood score.

![Medium-risk trigger](/gp/article1/10-min.png)

**Add actions:**
Send feature promotion emails:
Use the "Send Email" action to create emails that promote new or underutilized features. Example:
Email Subject: "Discover new features to enhance your experience"
Email Body: "Hi [First Name], did you know about our new feature [Feature Name]? Click here to learn more!"

![Feature promotion email](/gp/article1/11-min.png)

Offer loyalty rewards:
Send emails with loyalty rewards or incentives. Example:
Subject: "Unlock exclusive rewards!"
Body: "Hi [First Name], as a thank you for being with us, we're offering you exclusive rewards. Log in to your account to see what's available and keep enjoying our services."

![Loyalty rewards email](/gp/article1/12-min.png)

**Add conditions:**
Monitor email engagement:
Check if users interact with the emails
Follow up with additional tips and offers to deepen their engagement.

![Monitor email engagement](/gp/article1/13-min.png)

![Email engagement follow-up](/gp/article1/14-min.png)

**Implement personalizations:**
Create feature highlight banners:
Create personalizations to display banners highlighting new features on the user dashboard.
Target medium-risk users to encourage feature adoption.

![Feature highlight banners](/gp/article1/15-min.png)

#### For low-risk users:

**Create a journey:**
Go to the Journeys section and create a journey for low-risk users.
Name the journey (e.g., "Low-Risk User Engagement Journey").

![Low-risk journey](/gp/article1/16-min.png)

**Set a trigger:**
Target users with a low likelihood of churning.

![Low-risk trigger](/gp/article1/17-min.png)

**Add actions:**
Send regular engagement emails:
Use "Email" actions to maintain regular contact with content updates and check-ins. Example:
Email Subject: "Stay updated with the latest features!"
Email Body: "Hi [First Name], we're excited to share some new features and updates with you. Stay tuned for more great updates to enhance your experience with us."

![Regular engagement email](/gp/article1/18-min.png)

Promote advanced features:
Send emails highlighting advanced features. Example:
Email Subject: "Explore advanced features to get the most out of our service"
Email Body: "Hi [First Name], did you know about our advanced features like [Feature 1] and [Feature 2]? These tools can help you achieve more with our service. Log in now to explore!"

![Advanced features email](/gp/article1/19-min.png)

**Add conditions:**
Track engagement:
Ensure users remain engaged by monitoring their activity.
Move them to other journeys if they show signs of becoming at risk.

![Track engagement](/gp/article1/20-min.png)

**Implement personalizations:**
Create an onboarding checklist:
Create personalizations to display an onboarding checklist for new features on the user dashboard.
Target low-risk users to encourage deeper engagement with the platform.

![Onboarding checklist](/gp/article1/21-min.png)

### Step 5: Monitor and adjust strategies

Regularly review the effectiveness of your retention campaigns using Intempt's journey analytics.

Track user responses and adjust strategies based on the analytics data.

Continuously retrain your model with new data to maintain accuracy and relevance.

## FAQs

**How is Intempt different from traditional CRMs?**

Unlike traditional CRMs that rely on manual data entry and static records, Intempt uses AI agents to research, segment, qualify, and enrich leads continuously, keeping your pipeline moving without constant human intervention.

**What is the built-in Customer Data Platform (CDP) and why does it matter?**

The built-in CDP unifies all your customer data across channels into a single profile. It resolves user identities by merging anonymous and known sessions, connects users to their companies, and combines behavioral, firmographic, and journey data. This gives your team a complete, real-time view of every customer.

**How does AI-powered segmentation work in Intempt?**

You can create customer segments simply by describing them in plain language. The AI analyzes lifecycle, qualification, and engagement data to build segments automatically. These segments update in real time as new data comes in, so your campaigns always target the right audience.

**What data enrichment sources does Intempt use?**

Intempt pulls live enrichment data from external sources, including People Data Labs, DropContact, and other public databases. This fills in missing attributes on user and account records automatically, keeping your data complete and current.

**Is Intempt compliant with GDPR and CCPA?**

Yes. Intempt includes built-in consent management tools for GDPR and CCPA compliance. You can collect and track user permissions, handle right-to-be-forgotten and data portability requests with one click, and offer customers a customizable preference center.

**What platforms does Intempt integrate with?**

Intempt offers native integrations with popular platforms, including HubSpot, Shopify, Stripe, and more. It provides real-time data sync across your CRM, marketing, and eCommerce tools, with customizable triggers, field mappings, and data flows to fit your specific workflows.`,
  },
  "purchase-propensity-abandonment": {
    title: "Purchase propensity & abandonment",
    image: "/growthplays/purchase-propensity.jpg",
    content: `Accurately predict purchase propensity in real-time and automate interventions with on-page experiences and messaging actions in journeys.

## About the Growth Play

Converting browsers into buyers is crucial for balancing your acquisition funnel. This use case addresses the challenge of predicting the likelihood of user purchases and intervening when there is a high risk of cart abandonment.
With Intempt's ML likelihood model, you can accurately predict purchase propensity in real-time and automate interventions with on-page experiences and messaging actions in journeys.

## Benefits

- Increase sales: Predict and target potential buyers effectively to convert more browsers into customers.

- Reduce cart abandonment: Implement timely interventions to prevent users from abandoning their carts.

- Enhance customer experience: Personalize user interactions based on their behavior and preferences.

- Data-driven insights: Utilize advanced analytics to understand user behavior and optimize marketing strategies.

- Integration capabilities: Seamlessly integrate with various data sources to create comprehensive user profiles.

## How it works

### Step 1: Track key events

Identify purchase behaviors:

Common purchase indicators include frequent product views, adding items to the cart, and long browsing time.

Implement tracking for these events using the Javascript SDK or iOS SDK

### Step 2: Create the lifecycle agent

Create lifecycle agent:

Navigate to the Agents section in Intempt

Initiate Agent Creation:

Select the conversion as the goal event - such as "Purchase."

![Initiate Agent Creation](/gp/article2/1-min.png)

Filter Training Data:

Filter out users you don't want to include in the model training data. This might involve excluding inactive users or users with incomplete data profiles.

![Filter Training Data](/gp/article2/2-min.png)

Real-Time Scoring:

Deploy the model to start scoring users in real time. Intempt ensures that the likelihood model operates in real time, constantly updating as new data is collected.

Once the model is trained and deployed, it will output an attribute with values indicating purchase propensity (low, medium, high).

### Step 3: Create user segments

Create user segments:

Based on the lifecycle agent, create Segments such as "High Purchase Propensity" and "At Risk of Abandonment."

"High Purchase Propensity" should have a "High" value for the "Purchase likelihood" model.

![High Purchase Propensity segment](/gp/article2/3-min.png)

"At Risk of Abandonment" will have a "Low" value for the "Purchase likelihood" model

![At Risk of Abandonment segment](/gp/article2/4-min.png)

### Step 4: Design personalized journeys

Create a journey for high purchase propensity:

Go to the "Journeys" section and click "Create Journey."

Define triggers such as "Product Viewed" or "Added to Cart."

Add conditions to target users in the "High Purchase Propensity" segment.

Configure actions like sending personalized emails with product recommendations or exclusive discounts. Example email:

Subject: "Special Offer Just for You! 10% Off on Your Next Purchase"

Body: "Hi [First Name], we noticed you were looking at [Product Name]. As a thank you, we're offering you a 10% discount on your next purchase. Use code SAVE10 at checkout. Don't miss out on this exclusive offer!"

![High purchase propensity email](/gp/article2/5-min.png)

Create a journey for at-risk users:

Define triggers such as "Cart Abandoned."

Add conditions to target users in the "At Risk of Abandonment" segment.

Configure actions like sending reminder emails or offering limited-time discounts. Example email:

Subject: "You Left Something Behind!"

Body: "Hi [First Name], it looks like you left [Product Name] in your cart. Complete your purchase now and get an extra 5% off! Use code CART5 at checkout. Hurry, this offer is for a limited time only!"

![At-risk user email](/gp/article2/6-min.png)

### Step 5: Implement personalizations

Set up personalized experiences for high purchase propensity:

Go to the "Experiences" section and click "Create Experience"

Choose the target audience based on the "High Purchase Propensity" segment.

Design experiences such as tailored product suggestions or special promotions.

Example personalization:

On Home Page: Display a banner with a personalized message like, "Welcome back, [First Name]! Check out our new arrivals just for you!"

On Product Page: Show a sidebar with related products and a message, "Based on your interest in [Product Name], you might like these items too!"

![Product page personalization](/gp/article2/7-min.png)

Set up personalized experiences for at-risk users:

Go to the "Personalizations" section and click "Create Personalization."

Choose the target audience based on the "At Risk of Abandonment" segment.

Design experiences such as tailored reminders and special incentives to complete the purchase.

Example personalization:

On Cart Page: Display a pop-up with a personalized message like, "Don't leave yet, [First Name]! Complete your purchase now and enjoy an extra 5% off with code CART5."

On Checkout Page: Show a message encouraging users to finalize their purchase, "Almost there, [First Name]! Your items are waiting. Complete your purchase and get 5% off with code CART5."

![Checkout page personalization](/gp/article2/8-min.png)

Configure display rules:

Set rules to display personalized content on specific pages, such as the home page, product page, cart page, or checkout page.

Ensure the personalized content is visible to users in the relevant segments

![Configure display rules](/gp/article2/9-min.png)

### Step 6: Monitor and optimize

Analyze performance:

Use Intempt's analytics dashboard to monitor the effectiveness of your journeys and personalizations.

Track key metrics such as conversion rates, cart abandonment rates, and overall sales.

Optimize strategies:

Based on the performance data, make adjustments to your journeys and personalizations.

Continuously test and refine your strategies to maximize effectiveness.

## FAQs

**How is Intempt different from traditional CRMs?**

Unlike traditional CRMs that rely on manual data entry and static records, Intempt uses AI agents to research, segment, qualify, and enrich leads continuously, keeping your pipeline moving without constant human intervention.

**What is the built-in Customer Data Platform (CDP) and why does it matter?**

The built-in CDP unifies all your customer data across channels into a single profile. It resolves user identities by merging anonymous and known sessions, connects users to their companies, and combines behavioral, firmographic, and journey data. This gives your team a complete, real-time view of every customer.

**How does AI-powered segmentation work in Intempt?**

You can create customer segments simply by describing them in plain language. The AI analyzes lifecycle, qualification, and engagement data to build segments automatically. These segments update in real time as new data comes in, so your campaigns always target the right audience.

**What data enrichment sources does Intempt use?**

Intempt pulls live enrichment data from external sources, including People Data Labs, DropContact, and other public databases. This fills in missing attributes on user and account records automatically, keeping your data complete and current.

**Is Intempt compliant with GDPR and CCPA?**

Yes. Intempt includes built-in consent management tools for GDPR and CCPA compliance. You can collect and track user permissions, handle right-to-be-forgotten and data portability requests with one click, and offer customers a customizable preference center.

**What platforms does Intempt integrate with?**

Intempt offers native integrations with popular platforms, including HubSpot, Shopify, Stripe, and more. It provides real-time data sync across your CRM, marketing, and eCommerce tools, with customizable triggers, field mappings, and data flows to fit your specific workflows.`,
  },
  "in-session-recommender": {
    title: "In-session recommender",
    image: "/growthplays/in-session.jpg",
    content: `Decide which product features to highlight for each user as they browse, based on their adoption patterns and preferences.

## About the Growth Play

To ensure efficient product adoption, you must react in real-time to suggest optimal features so that the end users can reach their next product adoption milestone faster.

Using Lifecycle agent combined with personalizations, you can build an ultimate product adoption engine by highlighting the most relevant features to each user in real time.

## Benefits

- Increases user engagement by highlighting relevant features based on user behavior.

- Reduces churn by keeping users engaged and satisfied with personalized experiences.

- Enhances feature adoption through targeted recommendations.

- Boosts ROI: by leveraging machine learning without the need for extensive resources.

## How it works

Let's take an example of a SaaS app, "Otto," which offers features like Task Management, Time Tracking, and Team Collaboration. We aim to predict which feature to highlight to each user based on their behavior and adoption patterns.

### Step 1: Create the Lifecycle Agent

Data preparation:

Ensure you have at least 21 days of data collection and a minimum of 10,000 average daily events.

Collect events related to feature usage, such as:

Tasks created

Time entries logged

Messages sent in team collaboration

Ensure your goal event, such as "Feature Adoption," has a minimum daily average of 200 true and 200 false users over 30 days.

![Goal event requirements](/gp/article3/1-min.png)

Agent creation:

Choose the target goal representing the behavior you want to predict, such as "Becomes a Product Qualified Lead."

![Choose target goal](/gp/article3/2-min.png)

Select the actions (events) you want to choose between, such as "Task Created," "Time Entry Logged," and "Message Sent."

![Select actions](/gp/article3/3-min.png)

Filter out training data for better results by filtering users that would skew the results (e.g. users that did not login for the last 30 days)

![Filter training data](/gp/article3/4-min.png)

Training the agent:

After the model is created, it starts the training and generating predictions. Intempt will create an output attribute to store prediction values.

Review the agent's prediction quality by checking the "Results" tab.

Wait to collect more data if necessary to improve prediction quality.

### Step 2: Create segments

Create segments based on the agent output. Each user will have a predicted next best action, such as:

"task_created" for users likely to adopt Task Management

"time_entry_logged" for users likely to adopt Time Tracking

"message_sent" for users likely to adopt Team Collaboration

![Create segments based on agent output](/gp/article3/5-min.png)

Segment creation details:

For Task Management, create a segment where the NBA attribute value is "task_created."

![Task Management segment](/gp/article3/6-min.png)

For Time Tracking, create a segment where the NBA attribute value is "time_entry_logged."

![Time Tracking segment](/gp/article3/7-min.png)

For Team Collaboration, create a segment where the NBA attribute value is "message_sent."

![Team Collaboration segment](/gp/article3/8-min.png)

### Step 3: Set up personalizations

Create experiences:

Navigate to the Experiences section and select "Create Experience"

For users with the next best action of "task_created":

Design a visual experience showcasing the advanced task management features. Use an engaging banner at the top of the dashboard highlighting "Did you know? You can now create recurring tasks and set task dependencies for better project management!" Include a call-to-action (CTA) button "Learn More" that directs users to a detailed guide or tutorial.

![Task created experience](/gp/article3/9-min.png)

For users with a next best action of "time_entry_logged":

Create an experience with a pop-up modal that appears when the user logs time. The modal should have a message like "Maximize your productivity! Integrate your calendar and track your time seamlessly." Include a CTA button "Get Started" leading to the integration setup page.

![Time entry logged experience](/gp/article3/10-min.png)

For users with a next best action of "message_sent":

Develop a sidebar notification that highlights new collaboration tools. Use text such as "Enhance your team's communication with our new real-time document editing and video conferencing features." Add a CTA button "Try Now" that takes users to the feature setup page.

![Message sent experience](/gp/article3/11-min.png)

Configure targeting:

Use the segments created from the NBA model as the targeting criteria.

Assign the relevant experiences to each segment:

Segment: NBA attribute value "task_created" → Experience: Advanced Task Management Features

![Assign task_created experience](/gp/article3/12-min.png)

Segment: NBA attribute value "time_entry_logged" → Experience: Time-Saving Tips and Integrations

![Assign time_entry_logged experience](/gp/article3/13-min.png)

Segment: NBA attribute value "message_sent" → Experience: New Collaboration Tools

![Assign message_sent experience](/gp/article3/14-min.png)

Start personalization:

Review the configured experiences and their targeting settings.

Start the personalization campaign.

### Step 4: Monitor and optimize

Analyze results:

Regularly check the performance metrics in the Personalizations analytics section.

Key personalization metrics to monitor:

Unique Views: Number of users who viewed the personalized experience.

Conversions: Number of users who triggered the desired action.

Conversion Percentage: Percentage of users who triggered the desired action.

Lift: Improvement in conversion rate compared to the control group.

Adjust and refine:

Based on the analysis, tweak the segments and experiences to optimize recommendations.

Implement A/B tests to compare different approaches. For example, test different messaging for promoting Task Management features.

Continuously refine the NBA model and personalizations based on user feedback and performance data.

## FAQs

**How is Intempt different from traditional CRMs?**

Unlike traditional CRMs that rely on manual data entry and static records, Intempt uses AI agents to research, segment, qualify, and enrich leads continuously, keeping your pipeline moving without constant human intervention.

**What is the built-in Customer Data Platform (CDP) and why does it matter?**

The built-in CDP unifies all your customer data across channels into a single profile. It resolves user identities by merging anonymous and known sessions, connects users to their companies, and combines behavioral, firmographic, and journey data. This gives your team a complete, real-time view of every customer.

**How does AI-powered segmentation work in Intempt?**

You can create customer segments simply by describing them in plain language. The AI analyzes lifecycle, qualification, and engagement data to build segments automatically. These segments update in real time as new data comes in, so your campaigns always target the right audience.

**What data enrichment sources does Intempt use?**

Intempt pulls live enrichment data from external sources, including People Data Labs, DropContact, and other public databases. This fills in missing attributes on user and account records automatically, keeping your data complete and current.

**Is Intempt compliant with GDPR and CCPA?**

Yes. Intempt includes built-in consent management tools for GDPR and CCPA compliance. You can collect and track user permissions, handle right-to-be-forgotten and data portability requests with one click, and offer customers a customizable preference center.

**What platforms does Intempt integrate with?**

Intempt offers native integrations with popular platforms, including HubSpot, Shopify, Stripe, and more. It provides real-time data sync across your CRM, marketing, and eCommerce tools, with customizable triggers, field mappings, and data flows to fit your specific workflows.`,
  },
  "drive-revenue-upsells": {
    title: "Drive more revenue with tailored upsells",
    image: "/growthplays/upsells.jpg",
    content: `Predict the categories that will maximize upsell opportunities for each user based on their previous usage and current behavior.

## About the Growth Play

Drive more revenue with tailored upsells leverage customer data to predict and recommend product categories most likely to lead to additional purchases. By leveraging the ML-based lifecycle agent, you can create journeys that message users via email and SMS with categories that increase the likelihood of purchasing. You can also adjust your website experience to provide personalized banners with suggestions for users to explore the recommended category based on their real-time browsing behavior.

## Benefits

- Increased average order value (AOV). Customers are more likely to add more items to their cart by recommending additional relevant product categories.

- Enhanced customer experience. Personalized recommendations make shopping more enjoyable and relevant for customers.

- Higher conversion rates. Targeted upsells are more likely to convert than generic promotions.

- Improved customer retention. Satisfied customers are more likely to return, boosting long-term loyalty.

- Operational efficiency. Automated recommendations reduce the need for manual intervention, saving time and resources.

## How it works

### Step 1: Define and create events for each category

1. Create category-specific events:

Identify the product categories you want to track (e.g., dresses, shoes, accessories, outerwear).

For each category, create an event. For example:

"Visited dresses category"

"Visited accessories category"

"Visited outerwear category"

Use the event type "Page view" and include the category's URL parameters to track these events accurately. For instance, track page views with URLs containing /category/dresses, /category/shoes, etc.

![Page view event tracking](/gp/article4/1-min.png)

### Step 2: Build the lifecycle agent

1. Set the goal event:

Define "Purchase" as the prediction agent's goal event. This can be tracked by setting up a "Purchase" event that triggers when a transaction is completed.

![Set goal event](/gp/article4/2-min.png)

2. Add category events to the agent:

Include all the category-specific events created in Step 1 as potential actions for the model to choose from. Each category event should be associated with the goal event "Purchase".

![Add category events](/gp/article4/3-min.png)

3. Filter training data:

To ensure the agent is trained on relevant data, exclude users who do not fit your desired criteria. For example, exclude users who have not purchased in the last year.

![Filter training data](/gp/article4/4-min.png)

4. Train the agent:

Allow the agent to analyze past data to identify patterns and predict which category visit will most likely lead to a purchase. This involves feeding historical data of customer interactions and purchase history into the model.

5. Agent output:

The model will output an attribute with a value reflecting the category that has the highest likelihood of leading to a purchase for each customer. For instance, if the model predicts a high likelihood for "Visited shoes," it will output an attribute like shoes_category.

![Agent output](/gp/article4/5-min.png)

### Step 3: Create segments based on model output

1. Create a new segment:

Navigate to the Segments section in Intempt and create a new segment.

2. Define segment conditions:

Use the attribute generated by the next best action model to define the segment. For example:

Segment: Users with the attribute value shoes_category.

Condition: Attribute next_best_action equals shoes_category.

3. Examples of configuring segments:

High likelihood to purchase dresses

Segment name: "High likelihood to purchase dresses"

Condition: Attribute next_best_action equals dresses_category

High likelihood to purchase accessories:

Segment name: "High likelihood to purchase accessories"

Condition: Attribute next_best_action equals accessories_category

High likelihood to purchase outerwear:

Segment name: "High likelihood to purchase outerwear"

Condition: Attribute next_best_action equals outerwear_category

4. Combine with other conditions:

You can further refine these segments by adding additional conditions. For example:

High likelihood to purchase dresses and recent activity:

Segment name: "High likelihood to purchase dresses and active in last 30 days"

Conditions:

Attribute next_best_action equals dresses_category

Last activity date is within the last 30 days

High likelihood to purchase shoes with high average order value:

Segment name: "High likelihood to purchase shoes and high AOV"

Conditions:

Attribute next_best_action equals shoes_category

Average order value greater than $100

![Segment conditions](/gp/article4/6-min.png)

### Step 4: Set up personalized journeys

1. Create a new journey:

Navigate to the Journeys section in Intempt and create a new journey.

2. Define the journey trigger:

Set the trigger for the journey based on the segment created in Step 3. For example:

Trigger: When a user enters the "High likelihood to purchase shoes" segment.

![Define journey trigger](/gp/article4/7-min.png)

3. Add actions to the journey:

Example nurture flow for High Likelihood to Purchase Shoes:

Step 1: Initial Email:

Action: Send a personalized email featuring the shoes category.

Example:Subject: Discover Our Latest Shoe Collection!

Content: Hi [Name],We noticed you are keen on our shoe collection. Check out our latest arrivals and find the perfect pair to complete your look.[Shop Now Link]Best,The Thread.ly Team

![Initial email](/gp/article4/8-min.png)

Step 2: Follow-up Email:

Action: Send a follow-up email with a special offer.

Example: Subject: Special Offer on Shoes Just for You!

Content: Dear [Name],We're offering you an exclusive discount on our shoe collection to show our appreciation. Don't miss out on this limited-time offer![Get Your Discount Link]Happy Shopping,The Thread.ly Team

![Follow-up email](/gp/article4/9-min.png)

Step 3: Reminder Email:

Action: Send a reminder email if no purchase is made.

Example: Subject: Last Chance to Save on Your Favorite Shoes!

Content: Hello [Name],This is your last chance to take advantage of our exclusive discount on shoes. Hurry, the offer ends soon![Shop Now Link]Best,The Thread.ly Team

![Reminder email](/gp/article4/10-min.png)

4. Add decision points:

Incorporate decision points to refine the journey further. For example:

Decision: If the user clicks on the email link, proceed to show a special discount offer.

Decision: If the user does not engage with the email, send a follow-up reminder after a few days.

![Decision points](/gp/article4/11-min.png)

5. Activate the journey:

Review the journey steps and activate it to start the automation process.

6. Multiple journeys for different categories:

For each category, create a separate journey trigger and associated actions. For example:

If you have 30 categories, set up 30 journey triggers and corresponding actions.

### Step 5: Deploy personalizations

1. Create a new personalization campaign:

Navigate to the Personalizations section in Intempt and create a new campaign.

2. Create multiple experiences within the campaign:

For each category segment, create a separate experience within the personalization campaign.

3. Set up the personalization content for each experience:

Experience for Shoes Category:

Homepage Banner: Display a banner featuring the latest shoes collection.

Sticky Top Bar: "Check out our newest shoe arrivals, [Name]!"

Recommended Product Section: Recommend popular and new shoe arrivals.

Offer section: "Exclusive Offer: 10% off all shoes for a limited time!"

Experience for Dresses Category:

Homepage Banner: Display a banner featuring the latest dresses collection.

Sticky Top Bar: "Discover our stunning new dresses, [Name]!"

Recommended Product Section: Recommend popular and new dress arrivals.

Offer section: "Special discount: 15% off on new dresses!"

Experience for Accessories Category:

Homepage Banner: Display a banner featuring the latest accessories collection.

Sticky Top Bar: "Complete your look with our new accessories, [Name]!"

Recommended Product Section: Recommend popular and new accessory arrivals.

Offer section: "Limited Time Offer: 20% off all accessories!"

4. Set the targeting conditions for each experience:

Define rules to ensure the personalized content is shown to the right users. For example:

Experience for Shoes Category: Target users where the attribute next_best_action equals shoes_category.

Experience for Dresses Category: Target users where the attribute next_best_action equals dresses_category.

Experience for Accessories Category: Target users where the attribute next_best_action equals accessories_category.

5. Activate the personalization campaign:

Review the personalization setup and activate the campaign to start delivering personalized experiences.

### Step 6: Monitor and optimize

1. Track performance with journey analytics:

Navigate to the Journey Analytics section in Intempt to analyze the performance of your journeys.

Key metrics to monitor:

Triggered journey: Number of users who have triggered the journey.

Converted: Number of users who completed the conversion event set for the journey.

Conversion rate: Percentage of users who converted out of those who triggered the journey.

Days to convert (Avg): Average number of days it took for users to convert after triggering the journey.

Use this metrics to evaluate initial engagement, optimize timing, and identify areas for improvement. For example, if the conversion rate is lower than expected, consider adjusting your emails' and SMS messages' content or timing.

2. Track performance with personalization analytics:

Navigate to the Personalization analytics section in Intempt to analyze the performance of your personalization campaigns.

Key metrics to monitor:

Control group: Represents the group of subjects that are set aside and do not receive the modified content.

Unique views: Measures the number of customers that viewed the personalized experience.

Conversion: Specifies the number of users that triggered the conversion metric.

Conversion %: Percentage of users across the audience that triggered the conversion metric.

Conversion value: Displayed if the conversion event includes the value of an event property.

Lift: Shows the improvement in the conversion rate percentage for the variants compared to the control group.

Use this metrics to assess the effectiveness of your personalized content. For instance, if the lift is significant, it indicates that the personalized content is performing well compared to the control group. Conversely, if the conversion rate is low, you may need to refine your personalization strategy or content.

3. Refine the model:

Regularly update and refine the next best action model based on new data to improve its accuracy and effectiveness.

## FAQs

**How is Intempt different from traditional CRMs?**

Unlike traditional CRMs that rely on manual data entry and static records, Intempt uses AI agents to research, segment, qualify, and enrich leads continuously, keeping your pipeline moving without constant human intervention.

**What is the built-in Customer Data Platform (CDP) and why does it matter?**

The built-in CDP unifies all your customer data across channels into a single profile. It resolves user identities by merging anonymous and known sessions, connects users to their companies, and combines behavioral, firmographic, and journey data. This gives your team a complete, real-time view of every customer.

**How does AI-powered segmentation work in Intempt?**

You can create customer segments simply by describing them in plain language. The AI analyzes lifecycle, qualification, and engagement data to build segments automatically. These segments update in real time as new data comes in, so your campaigns always target the right audience.

**What data enrichment sources does Intempt use?**

Intempt pulls live enrichment data from external sources, including People Data Labs, DropContact, and other public databases. This fills in missing attributes on user and account records automatically, keeping your data complete and current.

**Is Intempt compliant with GDPR and CCPA?**

Yes. Intempt includes built-in consent management tools for GDPR and CCPA compliance. You can collect and track user permissions, handle right-to-be-forgotten and data portability requests with one click, and offer customers a customizable preference center.

**What platforms does Intempt integrate with?**

Intempt offers native integrations with popular platforms, including HubSpot, Shopify, Stripe, and more. It provides real-time data sync across your CRM, marketing, and eCommerce tools, with customizable triggers, field mappings, and data flows to fit your specific workflows.`,
  },
  "personalized-in-app-offers": {
    title: "Personalized in-app offers",
    image: "/growthplays/in-app-offers.jpg",
    content: `Present the most compelling in-app purchase promotions based on the user's behavior, demographics, and geo location to maximize conversion opportunities.

## About the Growth Play

Presenting personalized in-app offers is crucial for maximizing user engagement and conversion rates in mobile apps
This use case guides you through steps to enable in-app personalization, encouraging users to explore new features, share content, and subscribe to paid plans.

## Benefits

- Increased user engagement. Personalized offers keep users engaged by presenting relevant content and promotions.

- Higher conversion rates. Tailoring in-app offers to individual user behavior and preferences increases the likelihood of feature adoption and subscriptions.

- Enhanced user satisfaction. Users are more likely to have a positive experience when presented with offers that match their interests and needs.

- Improved revenue growth. Effective in-app offers can drive subscriptions and feature adoption, leading to increased revenue.

## How it works

To illustrate the use case, we will use a made-up music streaming app called Music.ly.

### Step 1: Set up tracking, define events & create segments

1. Install Intempt's iOS SDK:

Integrate Intempt's iOS SDK into your mobile app to start tracking user activities. Follow the iOS SDK integration guide to ensure proper setup.

2. Identify key events:

Determine which user activities you want to track, such as playing, liking, sharing, and visiting the subscription page.

Set up event tracking:

Configure these events in Intempt's dashboard. For example:

played_song: Triggered when a user plays a song.

liked_song: Triggered when a user likes a song.

shared_song: Triggered when a user shares a song.

visited_subscription_page: Triggered when a user visits the subscription page.

4. Create segments in Intempt:

Navigate to the Segments section and create new segments based on the tracked events. For instance:

Listened to 5 songs but not liked: Users who have played at least 5 songs but have not used the "Like" functionality.

Listened to 10 songs but not shared: Users who have played at least 10 songs but have not used the "Share" functionality.

Visited subscription page multiple times: Users who have visited the subscription page at least 5 times but have not subscribed.

### Step 2: Set up personalizations

1. Create a new server-side personalization campaign:

Go to the Personalizations section and create a new server-side personalization campaign

2. Create experiences and add content using the code editor:

Each campaign will require multiple experiences to be set; each will contain the content you want to display for the use

Use the code editor to create and style the in-app messages or popups.

Good to know

Refer to Server-side personalizations for a complete guide on creating server-side personalizations.

Personalization: Feature Adoption Prompts

1. Experience for Like Feature Adoption:

Target segment: Listened to 5 songs but not liked

Changes:

In-App Message:

Show a feature adoption screen encouraging the use of the "Like" functionality.

Content:

Message: "Ready to share your favorite songs? Can't stop listening to your beat? Share it with your friends so they can get the same experience!"

![Like feature adoption message](/gp/article5/1-min.png)

2. Experience for Share Feature Adoption:

Target segment: Listened to 10 songs but not shared

Changes:

In-App Message:

Show a feature adoption screen encouraging the "Share" functionality.

Content:

Message: "Ready to share your favorite songs? Can't stop listening to your beat? Share it with your friends so they can get the same experience!"

![Share feature adoption message](/gp/article5/2-min.png)

Personalization: Subscription Offers

1. Experience for Subscription Trial Offer:

Target segment: Visited subscription page multiple times

Changes:

In-App Popup:

Show a 3-day trial offer to users who frequently visit the subscription page but have not subscribed.

Content:

Message: "Enjoy a 3-day free trial of our Premium plan! Explore all the features we have to offer and elevate your music experience."

![Subscription trial offer message](/gp/article5/3-min.png)

### Step 3: Configure targeting and display settings

1. Set targeting conditions:

For each experience, configure the audience targeting based on the relevant segments. Ensure that the conditions match the segments created in Step 3.

2. Define display rules:

Specify the conditions under which the personalized experiences will be displayed, such as when a user plays a song or visits the subscription page.

Set the display frequency to ensure the personalized content is shown consistently to the targeted users.

![Define display rules](/gp/article5/4-min.png)

### Step 4: Launch and monitor the personalization campaign

1. Start the personalization campaign:

Once all experiences are set up and configured, start the personalization campaign in Intempt.

2. Monitor performance:

Use Intempt's Personalization Analytics to track the performance of each experience. Key metrics to monitor include:

Unique views: Number of users who viewed the personalized content.

Conversion: Number of users who completed a desired action, such as liking a song or subscribing to a plan.

Conversion %: Percentage of users who converted based on the total audience targeted.

Lift: Improvement in conversion rate compared to the control group.

3. Adjust and optimize:

Based on the analytics data, make adjustments to the experiences to improve performance. For instance, if the conversion rate for the Listened to 5 songs but not liked segment is low; consider refining the content or targeting criteria.

## FAQs

**How is Intempt different from traditional CRMs?**

Unlike traditional CRMs that rely on manual data entry and static records, Intempt uses AI agents to research, segment, qualify, and enrich leads continuously, keeping your pipeline moving without constant human intervention.

**What is the built-in Customer Data Platform (CDP) and why does it matter?**

The built-in CDP unifies all your customer data across channels into a single profile. It resolves user identities by merging anonymous and known sessions, connects users to their companies, and combines behavioral, firmographic, and journey data. This gives your team a complete, real-time view of every customer.

**How does AI-powered segmentation work in Intempt?**

You can create customer segments simply by describing them in plain language. The AI analyzes lifecycle, qualification, and engagement data to build segments automatically. These segments update in real time as new data comes in, so your campaigns always target the right audience.

**What data enrichment sources does Intempt use?**

Intempt pulls live enrichment data from external sources, including People Data Labs, DropContact, and other public databases. This fills in missing attributes on user and account records automatically, keeping your data complete and current.

**Is Intempt compliant with GDPR and CCPA?**

Yes. Intempt includes built-in consent management tools for GDPR and CCPA compliance. You can collect and track user permissions, handle right-to-be-forgotten and data portability requests with one click, and offer customers a customizable preference center.

**What platforms does Intempt integrate with?**

Intempt offers native integrations with popular platforms, including HubSpot, Shopify, Stripe, and more. It provides real-time data sync across your CRM, marketing, and eCommerce tools, with customizable triggers, field mappings, and data flows to fit your specific workflows.`,
  },
  "website-navigation-content": {
    title: "Website navigation & content display",
    image: "/growthplays/navigation.jpg",
    content: `Change the content of the homepage based on the user activity to create an immediate sense of relevance. Adjust the navigation menu to highlight categories or pages the user has shown interest in.

## About the Growth Play

Most SaaS websites are designed to be generic and safe, showing the same content to each user. Users encounter the same content regardless of the lifecycle stage, industry, or position. Generic content leads to high dropoffs and, eventually, poor conversion rates.
With Intempt, you can segment users in real time and adjust the website experience based on their signals. The more behavioral data you gather, the more content you can progressively personalize, including your home page, feature, pricing pages, and navigation bar.

## Benefits

- Increased user engagement. Personalized content and navigation keep users engaged by showing them the most relevant information.

- Higher conversion rates. Tailoring the user experience to individual preferences increases the likelihood of trial sign-ups and subscriptions.

- Enhanced user satisfaction. Users are more likely to have a positive experience when they can easily find and interact with the content they are interested in.

- Improved customer retention. Personalized experiences can help retain customers by continually adapting to their evolving interests and needs.

## How It Works

### Step 1. Set up tracking, define events & create segments

![Step 1 setup tracking](/gp/article6/1-min.png)

1. Install Intempt's Javascript SDK:

Embed the JavaScript SDK into your website to start tracking user activities. This will allow you to capture various events, such as page views, clicks, and form submissions.

Identify key events:

Determine which user activities you want to track, such as viewing specific industry pages, booking a demo, or navigating the pricing page.

Set up event tracking:

Configure these events in Intempt's dashboard. For example:

viewed_industry_page: Triggered when a user visits a specific industry page.

booked_demo: Triggered when a user submits the "Book a demo" form.

viewed_pricing_page: Triggered when a user visits the pricing page.

Good to know

Refer to Events for a complete guide on setting your events.

Create segments in Intempt:

Navigate to the Segments section and create new segments based on the tracked events. For instance:

Interested in Industry A: Users who viewed the Industry A page.

Interested in Industry B: Users who viewed the Industry B page.

Demo Booked: Users who have booked a demo.

No Demo Booked: Users who have not booked a demo.

Enterprise: Users from large companies (500+ employees)

Mid-market: Users from medium-sized companies (100-499 employees)

SMB: Users from small companies (1-99 employees)

### Step 2. Set up personalizations

![Step 2 set up personalizations](/gp/article6/2-min.png)

Create a new personalization campaign:

Go to the Personalizations section and create personalizations for different website sections.

Personalization: Homepage Hero Section

Experience for Industry A:

Target segment: Interested in Industry A

Changes:

Homepage Hero Image and Title:

Change the hero image to one that represents Industry A.

Update the homepage title and subtext to reflect Industry A.

Example:

Hero Image: Image showing a business scenario specific to Industry A.

Title: "Empowering Industry A with Cutting-Edge SaaS Solutions"

Subtext: "Tailored tools and features to elevate your business in Industry A."

Experience for Industry B:

Target segment: Interested in Industry B

Changes:

Homepage Hero Image and Title:

Change the hero image to one that represents Industry B.

Update the homepage title and subtext to reflect Industry B.

Example:

Hero Image: Image showing a business scenario specific to Industry B.

Title: "Empowering Industry B with Cutting-Edge SaaS Solutions"

Subtext: "Tailored tools and features to elevate your business in Industry B."

Personalization: Feature Pages

Experience for Industry A:

Target segment: Interested in Industry A

Changes:

Feature Pages:

Customize the content on feature pages to highlight the benefits and use cases relevant to Industry A.

Example:

Feature Page Header: "Unlock the Full Potential of Industry A with Our Solutions"

Content Sections: Include case studies, testimonials, and feature descriptions that are specific to Industry A.

Experience for Industry B:

Target segment: Interested in Industry B

Changes:

Feature Pages:

Customize the content on feature pages to highlight the benefits and use cases relevant to Industry B.

Example:

Feature Page Header: "Unlock the Full Potential of Industry B with Our Solutions"

Content Sections: Include case studies, testimonials, and feature descriptions that are specific to Industry B.

Personalization: Pricing Page

Experience for Enterprise:

Target segment: Enterprise

Changes:

Pricing Page Focus:

Highlight the Premium plan for enterprise users.

Example:

Highlighted Plan: Premium Plan

Callout: "Our Premium Plan is designed to meet the needs of large enterprises, offering advanced features and dedicated support."

Experience for Small Company:

Target segment: Small Company

Changes:

Pricing Page Focus:

Highlight the Entry plan for small companies.

Example:

Highlighted Plan: Entry Plan

Callout: "Our Entry Plan provides all the essential features needed by small businesses at an affordable price."

Personalization: Navigation CTA Buttons

Experience for No Demo Booked:

Target segment: No Demo Booked

Changes:

CTA Buttons on Nav Bar:

Highlight the "Book a demo" button to encourage users to schedule a demo.

Example:

Button Text: "Book a Demo"

Highlight Style: Make the button more prominent with a contrasting color.

Experience for Demo Booked:

Target segment: Demo Booked

Changes:

CTA Buttons on Nav Bar:

Highlight the "Sign up" button for users who have already booked a demo.

Example:

Button Text: "Sign Up"

Highlight Style: Make the button more prominent with a contrasting color.

Set targeting conditions:

For each experience, configure the audience targeting based on the relevant segments. Ensure that the conditions match the segments created in Step 3.

Define display rules:

Specify the pages where the personalized experiences will be displayed, such as the homepage, feature pages, and pricing page.

Set the display frequency to ensure the personalized content is shown consistently to the targeted users.

### Step 3: Launch and monitor the personalization campaign

Start the personalization campaign:

Once all experiences are set up and configured, start the personalization campaign in Intempt.

Monitor performance:

Use Intempt's Personalization Analytics to track the performance of each experience. Key metrics to monitor include:

Unique views: Number of users who viewed the personalized content.

Conversion: Number of users who completed a desired action, such as booking a demo or signing up.

Conversion %: Percentage of users who converted based on the total audience targeted.

Lift: Improvement in conversion rate compared to the control group.

Adjust and optimize:

Based on the analytics data, make adjustments to the experiences to improve performance. For instance, if the conversion rate for the Interested in Industry A segment is low; consider refining the content or targeting criteria.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "in-app-onboarding": {
    title: "In-app onboarding",
    image: "/growthplays/onboarding.jpg",
    content: `Streamline the onboarding experience to help users reach A-ha moments faster, adopt sticky features, and enable shortcuts based on the features the user interacts with the most.

## About the Growth Play

An effective onboarding process is crucial for improving user conversion and activation rates. This use case focuses on creating a personalized onboarding experience for new users, helping them navigate key features, and ensuring they receive the most relevant guidance based on their behavior.

## Benefits

- Increased user engagement: Personalized onboarding keeps users engaged by presenting relevant steps based on their interactions.

- Higher feature adoption: Tailoring the onboarding process to individual user behavior increases the likelihood of feature adoption.

- Enhanced user satisfaction: Users are more likely to have a positive experience when guided through the app in a personalized manner.

- Improved retention rates: Effective onboarding helps users understand the app's value, leading to higher long-term retention.

## How It Works

To illustrate the use case, we will refer to a made-up project management app, "Otto."

### Step 1. Set up tracking for user activity, define events & segment users

![Step 1 setup tracking](/gp/article7/1-min.png)

Install Intempt's SDK:

Integrate Intempt's JS SDK into your app to start tracking user activities. Follow the Javascript SDK integration guide to ensure proper setup.

Identify key events:

Determine which user activities you want to track during the onboarding process. For example, creating a project, creating a task, inviting a team member, creating an AI prediction, and viewing the dashboard.

Add event tracking script to your application:

Configure event tracking in your application. For example:

created_project: Triggered when a user creates their first project.

created_task: Triggered when a user creates and edits their first task.

invited_team_member: Triggered when a user invites their first team member.

created_ai_prediction: Triggered when a user creates their first AI prediction.

viewed_dashboard: Triggered when a user views the dashboard.

Create segments in Intempt:

Navigate to the Segments section and create new segments based on the tracked events. For instance:

New User: Users who have just signed up.

Created Project: Users who have created their first project.

Created Task: Users who have created and edited their first task.

Invited Team Member: Users who have invited their first team member.

Created AI Prediction: Users who have created their first AI prediction.

Good to know

Refer to Javascript SDK on how to track custom events in your app. Using a single page application (SPA)? Refer to the Event tracking on Single Page Applications (SPA) guide.

![Step 2 set up personalizations](/gp/article7/2-min.png)

### Step 2: Set up server-side personalizations

Personalization allows you to deliver targeted content to users based on their behavior. In this case, we will create multiple onboarding experiences tailored to the user's progress.

Create a new personalization campaign:

Go to the Personalizations section and create a new server-side personalization campaign named "Onboarding Steps".

Add experiences for each onboarding step:

Create multiple variants within the campaign, each targeting a different segment.

Define the in-app message content:

Use the code editor to create and style the in-app messages or popups. Example for the "Create the First Project" experience:

{
  "message": {
    "title": "Welcome to Otto!",
    "body": "Start by creating your first project to organize your tasks and collaborate with your team.",
    "cta": {
      "text": "Create Project",
      "action": "openCreateProjectDialog"
    }
  }
}

Experiences:

Creating the First Project:

Target audience: Users who have just signed up and have not created a project yet (New User)

Changes:

In-App Message: Guide the user to create their first project.

Content: Message: "Welcome to Otto! Start by creating your first project to organize your tasks and collaborate with your team."

Creating and Editing the First Task:

Target audience: Users who have created their first project but have not created a task (Created Project)

Changes:

In-App Message: Guide the user to create and edit their first task.

Content: Message: "Great! Now let's create your first task. Add details and assign it to a team member to get started."

Inviting a Team Member:

Target audience: Users who have created and edited their first task but have not invited a team member (Created Task)

Changes:

In-App Message: Guide the user to invite their first team member.

Content: Message: "You're doing great! Next, invite your team members to collaborate on your project."

Creating an AI Prediction:

Target audience: Users who have invited their first team member but have not created an AI prediction (Invited Team Member)

Changes:

In-App Message: Guide the user to create their first AI prediction.

Content: Message: "Enhance your project management with AI predictions. Create your first prediction to see how AI can help you plan better."

Viewing the Dashboard:

Target audience: Users who have created their first AI prediction but have not viewed the dashboard (Created AI Prediction)

Changes:

In-App Message: Guide the user to view the dashboard.

Content: Message: "Finally, view your project dashboard to get an overview of your tasks and progress."

Set targeting conditions:

For each experience, configure the audience targeting based on the relevant segments. Ensure that the conditions match the segments created in Step 3 and are mutually exclusive.

Define display rules:

Specify the conditions under which the personalized experiences will be displayed, such as when a user signs up or completes a specific action.

Set the display frequency to ensure the personalized content is shown consistently to the targeted users.

### Step 3: Launch and monitor the personalization campaign

Start the personalization campaign:

Once all experiences are set up and configured, start the personalization campaign in Intempt.

Monitor performance:

Use Intempt's Personalization Analytics to track the performance of each experience. Key metrics to monitor include:

Unique views: Number of users who viewed the personalized content.

Conversion: Number of users who completed the guided action, such as creating a project or inviting a team member.

Conversion %: Percentage of users who converted based on the total audience targeted.

Lift: Improvement in conversion rate compared to the control group.

Adjust and optimize:

Based on the analytics data, make necessary adjustments to the experiences to improve performance. For instance, if the conversion rate for the Created Project segment is low, consider refining the content or targeting criteria.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "personalize-landing-pages": {
    title: "Personalize landing pages at scale",
    image: "/growthplays/landing-pages.jpg",
    content: `Turn any web page into a winning PPC landing page: No need to build 100s of separate landing pages - use Intempt to personalize any page on your website to match the copy in each ad campaign.

## About the Growth Play

An effective onboarding process is crucial for improving user conversion and activation rates. This use case focuses on creating a personalized onboarding experience for new users, helping them navigate key features, and ensuring they receive the most relevant guidance based on their behavior.

## Benefits

- Increased user engagement: Personalized onboarding keeps users engaged by presenting relevant steps based on their interactions.

- Higher feature adoption: Tailoring the onboarding process to individual user behavior increases the likelihood of feature adoption.

- Enhanced user satisfaction: Users are more likely to have a positive experience when guided through the app in a personalized manner.

- Improved retention rates: Effective onboarding helps users understand the app's value, leading to higher long-term retention.

## How It Works

To illustrate the use case, we will refer to a made-up project management app, "Otto."

### Step 1. Set up tracking for user activity

Install Intempt's SDK:

Integrate Intempt's JS SDK into your app to start tracking user activities. Follow the Javascript SDK integration guide to ensure proper setup.

![Step 1 setup tracking](/gp/article7/1-min.png)

### Step 2. Set up client-side personalization

Create a new personalization campaign:
Go to the Personalizations section and create a new client-side personalization campaign named "Landing Page Optimization".

Add variants for each UTM source:

Create multiple variants within the campaign, each targeting a different UTM source using the visual editor. Ensure that targeting conditions are based on the utm_source parameter.

Set targeting conditions:
For each experience, configure the audience targeting based on the relevant UTM parameters. Ensure that the conditions match the specified URL contains parameters.

Google Ads: URL contains utm_source=google

Facebook Ads: URL contains utm_source=facebook

Twitter Ads: URL contains utm_source=twitter

LinkedIn Ads: URL contains utm_source=linkedin

Experiences:

Google Ads:

URL contains: utm_source=google

Changes:

Headline: "Streamline Your Projects with Otto"

Subtext: "Boost Team Productivity with Otto's Advanced Tools. Free Trial Available - Try Otto Today!"

CTA: "Get Started"

Visuals: Show screenshots of the interface and key features.

Extensions: Highlight specific features and customer testimonials and provide a direct contact option.

Steps to configure:

Open Visual Editor: Select the experience for Google Ads and open the visual editor.

Edit Headline: Change the headline to "Streamline Your Projects with Otto".

Edit Subtext: Change the subtext to "Boost Team Productivity with Otto's Advanced Tools. Free Trial Available - Try Otto Today!".

Edit CTA: Change the call-to-action button text to "Get Started" and link it to the signup page.

Add Visuals: Include screenshots of the interface and key features.

Explanation: This experience is designed to appeal to users coming from high-intent search and display ads on Google. The focus is on showcasing the key features and benefits of the app, encouraging users to take advantage of a free trial.

![Google Ads explanation](/gp/article7/2-min.png)

Facebook Ads:

URL contains: utm_source=facebook

Changes:

Headline: "Join Our Community and Enhance Productivity"

Subtext: "Discover Otto's powerful tools for task management, team collaboration, and time tracking. Exclusive deal for Facebook users!"

CTA: "Join Now"

Carousel Ads: Showcase different features of the app, such as task management and team collaboration, using carousel ads with screenshots and user testimonials.

Video Ads: Embed a short demo video showing how Otto simplifies project management.

Steps to configure:

Open Visual Editor: Select the experience for Facebook Ads and open the visual editor.

Edit Headline: Change the headline to "Join Our Community and Enhance Productivity".

Edit Subtext: Change the subtext to "Discover Otto's powerful tools for task management, team collaboration, and time tracking. Exclusive deal for Facebook users!".

Edit CTA: Change the call-to-action button text to "Join Now" and link it to the signup page.

Add Carousel Ads: Include carousel ads showcasing different features of the app with screenshots and user testimonials.

Add Video Ads: Embed a short demo video showing how the app simplifies project management.

Explanation: This experience is crafted for users arriving from Facebook ads, emphasizing community engagement and the interactive features of Otto. Using carousel and video ads enhances the visual appeal and provides a comprehensive view of the app's capabilities.

![Facebook Ads explanation](/gp/article7/3-min.png)

Twitter Ads:

URL contains: utm_source=twitter

Changes:

Headline: "Take Your Project Management to the Next Level"

Subtext: "Use Otto to manage your projects efficiently. Start your free trial today!"

CTA: "Try for Free"

Promoted Tweets: Use short, impactful messages that highlight app's benefits.

Hashtag Campaigns: Create a branded hashtag like #OttoOrganizes and encourage users to share their experiences.

Steps to configure: (and so on)

Explanation: This experience targets Twitter users who prefer concise and impactful messaging. The inclusion of promoted tweets and hashtag campaigns engages users in real-time, encouraging them to share their experiences and join the conversation around the app.

![Twitter Ads explanation](/gp/article7/4-min.png)

LinkedIn Ads:

URL contains: utm_source=linkedin

Changes:

Headline: "Boost Your Business Efficiency with Otto"

Subtext: "Enhance your project management workflows with our comprehensive SaaS solutions. Exclusive offer for LinkedIn professionals!"

CTA: "Learn More"

Sponsored Content: Share articles, case studies, and whitepapers that demonstrate the app's value.

InMail Campaigns: Highlight how Otto can address specific pain points and offer exclusive deals.

Explanation: This experience is tailored for LinkedIn users, focusing on professional networking and B2B marketing. The content highlights thought leadership, showcases success stories, and offers exclusive deals to attract decision-makers and professionals.

![LinkedIn Ads explanation](/gp/article7/5-min.png)

### Step 3. Launch and monitor the personalization campaign

Start the personalization campaign: Once all experiences are set up and configured, start the personalization campaign in Intempt.

Monitor performance: Use Intempt's Personalization Analytics to track the performance of each experience. Key metrics to monitor include: Unique views, Conversion, Conversion %, and Lift.

Adjust and optimize: Based on the analytics data, adjust the experiences to improve performance.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "dynamic-testimonials": {
    title: "Dynamic testimonials",
    image: "/growthplays/testimonials.jpg",
    content: `Showcase relevant case studies or testimonials that resonate with the user's industry or use case to demonstrate value and build trust.

## About the Growth Play

Building trust and demonstrating value to potential customers is crucial for driving conversions. One effective way to achieve this is by showcasing relevant case studies or testimonials that resonate with the user's industry or use case. By dynamically displaying testimonials tailored to the user's industry, you can provide a personalized experience that builds trust and highlights the app's value.

## Benefits

Increased trust. Showcasing relevant testimonials builds credibility and trust with potential customers.

Enhanced user experience. Tailoring content based on the user's industry provides a more personalized and engaging experience.

Higher conversion rates. Relevant testimonials can help demonstrate value and persuade users to convert.

Efficiency in content management. Eliminates the need to create multiple static pages for different industries.

## How It Works

To illustrate the use case, we will refer to a made-up project management app, "Otto."

## Step 1. Set up tracking for user activity

### Install Intempt's SDK:

Integrate Intempt's SDK into your website to track user activities and attributes. Follow the Javascript SDK guide to ensure proper setup.

## Step 2. Create an event to track the user's industry

### Create or edit the "Book a demo" page:

Add an industry field to the "Book a demo" page. This step is unnecessary if you already have an industry option for this page.

\`\`\`html
<form id="book-demo-form">
  <label for="industry">Industry:</label>
  <select id="industry" name="industry">
    <option value="SaaS">SaaS</option>
    <option value="Retail">Retail</option>
    <option value="Financial services">Financial services</option>
  </select>
  <!-- Other form fields -->
  <button type="submit">Book a Demo</button>
</form>
\`\`\`

### Track the industry selection:

To track the event, use the track or record method via Intempt's Javascript SDK. Ensure that you add "Industry" as a user attribute.

\`\`\`javascript
document.getElementById('book-demo-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const industry = document.getElementById('industry').value;

  Intempt.track('book_demo', {
    industry: industry
  });

  // Continue form submission logic
});
\`\`\`

## Step 3. Set up client-side personalizations

Personalization allows you to deliver targeted content to users based on their industry. In this case, we will create multiple experiences tailored to different industries.

### Create a new personalization campaign:

Go to the Personalizations section and create a new client-side personalization campaign named "Dynamic Testimonials".

### Add experiences for each industry:

Create multiple experiences within the campaign, each targeting a different industry using the visual editor. Ensure that targeting conditions are based on the industry attribute.

## Experiences

### SaaS industry:

**Targeting:** industry=SaaS

**Changes:**

**Testimonial:**

**Headline:** "Trusted by Leading SaaS Companies"

**Quote:** "Otto has revolutionized our project management process. The ability to collaborate in real-time has significantly increased our team's productivity." – John Doe, CEO of Tech Innovators

**Steps to configure:**

* Open Visual Editor: Select the experience for the SaaS industry and open the visual editor.
* Edit Headline: Change the headline to "Trusted by Leading SaaS Companies".
* Edit Quote: Change the quote to the SaaS testimonial.
* Set Targeting: Set the targeting condition to industry=SaaS.

### Retail industry:

**Targeting:** industry=Retail

**Changes:**

**Testimonial:**

**Headline:** "Empowering Retail Teams"

**Quote:** "With Otto, we have streamlined our inventory management and improved our coordination across multiple stores. It's been a game-changer for our retail operations." – Jane Smith, Operations Manager at Retail Hub

**Steps to configure:**

* Open Visual Editor: Select the experience for the Retail industry and open the visual editor.
* Edit Headline: Change the headline to "Empowering Retail Teams".
* Edit Quote: Change the quote to the Retail testimonial.
* Set Targeting: Set the targeting condition to industry=Retail.

### Financial services industry:

**Targeting:** industry=Financial services

**Changes:**

**Testimonial:**

**Headline:** "Transforming Financial Services"

**Quote:** "Otto's robust project management features have enabled us to manage complex projects with ease and maintain compliance standards. It's an invaluable tool for our firm." – Michael Johnson, Project Lead at Finance Pros

**Steps to configure:**

* Open Visual Editor: Select the experience for the Financial services industry and open the visual editor.
* Edit Headline: Change the headline to "Transforming Financial Services".
* Edit Quote: Change the quote to the Financial Services testimonial.
* Add Image: Include the logo of Finance Pros.
* Set Targeting: Set the targeting condition to industry=Financial services.

## Step 4. Configure targeting and display settings

### Set targeting conditions:

For each experience, configure the audience targeting based on the relevant industry attribute:

* SaaS Industry: Target users with industry=SaaS
* Retail Industry: Target users with industry=Retail
* Financial Services: Target users with industry=Financial services

### Define display rules:

Specify when and where the personalized testimonials will show (e.g., landing page visits with a specific industry attribute).

Set display frequency to ensure personalized content is shown consistently to targeted users.

## Step 5. Launch and monitor the personalization campaign

### Start the personalization campaign:

Once all experiences are configured, start the personalization campaign in Intempt.

### Monitor performance:

Use Intempt's Personalization Analytics to track key metrics:

* Unique views: Number of users who viewed the personalized content.
* Conversion: Number of users who completed a desired action (e.g., signup or purchase).
* Conversion %: Percentage of targeted users who converted.
* Lift: Improvement in conversion rate compared to the control group.

### Adjust and optimize:

Based on analytics, refine experiences, adjust targeting criteria, or test different testimonials to improve performance.

## FAQs

`,
  },
  "reverse-trials-paywalls": {
    title: "Reverse trials & paywalls",
    image: "/growthplays/trials.jpg",
    content: `Optimize the timing to nudge users toward subscribing to a paid plan. Automatically offer power users a premium experience trial to help them build a habit and consider upgrading to a premium plan.

## About the Growth Play

Optimizing the timing and approach for nudging users toward subscribing to a paid plan is crucial for increasing conversion rates. Offering engaged users a premium experience trial can help them build a habit and incentivize upgrading to a premium plan.

This use case focuses on creating a personalization campaign that offers a reverse trial if the user matches the "Power user" criteria.

## Good to know

A reverse trial means that if the user does not upgrade, it reverts to the Free plan after the trial period ends.

## Benefits

Increased conversion rates. Offering targeted trial experiences can effectively nudge power users to subscribe to the Premium plan.

Enhanced user experience. Tailoring the trial experience based on user behavior provides a more personalized and engaging experience.

Higher user retention. Providing a taste of the Premium features can help build user habits and increase long-term retention.

Data-driven optimization. Leveraging user behavior data to optimize trial offers ensures a more effective conversion strategy.

## How It Works

## Step 1. Set up tracking for user activity

### Install Intempt's iOS SDK:

Integrate Intempt's iOS SDK into your mobile app to start tracking user activities. Follow the iOS SDK integration guide to ensure proper setup.

## Step 2. Define key user events

### Identify key events:

Track user activities such as listening to songs and visiting the subscription page. For example, song_listened and subscription_page_viewed.

### Set up event tracking:

Configure these events by adding the "track" or "record" methods in your iOS app. Refer to the iOS SDK guide for a complete event tracking guide.

## Step 3. Create segments based on user behavior

### Create segments in Intempt:

Navigate to the Segments section and create new segments based on the tracked events. For instance:

* Power Users - High Interest: Users who signed up in the last 7 days, listened to more than 100 songs, and visited the subscription page more than 5 times.
* Power Users - Moderate Interest: Users who signed up in the last 7 days, listened to more than 100 songs, and visited the subscription page less than 5 times.

![Create segments in Intempt](/gp/article10/1-min.png)

## Step 4. Set up server-side personalization

Personalization allows you to deliver targeted content to users based on their behavior. We will create multiple experiences tailored to different user segments in this case.

### Create a new personalization campaign:

Go to the Personalizations section and create a new server-side personalization campaign named "Reverse Trials & Paywalls".

![Create a new personalization campaign](/gp/article10/2-min.png)

### Add experiences for each user segment:

Create experiences within the campaign, each targeting a different segment using the code editor. Ensure that targeting conditions are based on the user behavior attributes.

![Add experiences for each user segment](/gp/article10/3-min.png)

## Experiences

### 3-day Premium Trial:

**Targeting:** Users that belong to Power Users - High Interest segment.

**Changes:**

**Title:** Limited offer for unlimited access. Get a 3-day Premium trial.

**Body:**

* Ad-free music listening
* Download to listen offline
* Unlimited skips
* On-demand playback

**Steps to configure:**

* Open Code Editor: Select the experience for Power Users - High Interest and open the code editor.
* Edit Content: Use the JSON payload to define the personalized content.

\`\`\`json
{
  "title": "Limited offer for unlimited access. Get 3-day Premium trial",
  "body": {
    "features": [
      "Ad-free music listening",
      "Download to listen offline",
      "Unlimited skips",
      "On-demand playback"
    ]
  }
}
\`\`\`

**Explanation:** This experience targets users who have shown high interest in subscribing by frequently visiting the subscription page. Offering a shorter 3-day trial leverages their high intent to convert them quickly.

### Experience for 5-day Premium Trial:

**Targeting:** Users that belong to Power Users - Moderate Interest segment.

**Changes:**

**Title:** Limited offer for unlimited access. Get 5-day Premium trial

**Body:**

* Ad-free music listening
* Download to listen offline
* Unlimited skips
* On-demand playback

**Steps to configure:**

* Open Code Editor: Select the experience for Power Users - Moderate Interest and open the code editor.
* Edit Content: Use the JSON payload to define the personalized content.

\`\`\`json
{
  "title": "Limited offer for unlimited access. Get 5-day Premium trial",
  "body": {
    "features": [
      "Ad-free music listening",
      "Download to listen offline",
      "Unlimited skips",
      "On-demand playback"
    ]
  }
}
\`\`\`

**Explanation:** This experience targets users who have shown moderate interest in subscribing by visiting the subscription page fewer times. Offering a longer 5-day trial provides more time to experience the Premium features and incentivizes them to subscribe.

## Step 5. Configure targeting and display settings

### Set targeting conditions:

For each experience, configure the audience targeting based on the relevant behavior. Ensure that the conditions match the specified criteria for each segment.

* 3-day Premium Trial: Users who belong to Power Users - High Interest segment (signed up in the last 7 days, listened to more than 100 songs, and visited the subscription page more than 5 times).
* 5-day Premium Trial: Users who belong to Power Users - Moderate Interest segment (signed up in the last 7 days, listened to more than 100 songs, and visited the subscription page less than 5 times).

![Set targeting conditions](/gp/article10/4-min.png)

### Define display rules:

Set the display frequency to ensure the personalized content is shown only once per session.

![Define display rules](/gp/article10/5-min.png)

## Step 6. Launch and monitor the personalization campaign

### Start the personalization campaign:

Once all experiences are set up and configured, start the personalization campaign in Intempt.

### Monitor performance:

Use Intempt's Personalization Analytics to track the performance of each experience. Key metrics to monitor include:

* Unique views: Number of users who viewed the personalized content.
* Conversion: Number of users who completed the desired action, such as subscribing to the Premium plan.
* Conversion %: Percentage of users who converted based on the total audience targeted.
* Lift: Improvement in conversion rate compared to the control group.

### Adjust and optimize:

Based on the analytics data, make necessary adjustments to the experiences to improve performance. For example: refine targeting criteria, test different trial durations (e.g., 7-day trial), enhance trial features, run A/B tests, or add personalized follow-ups.

## FAQs

`,
  },
  "automated-outbound-apollo-clay": {
    title: "Automated Outbound with Apollo, Clay & Intempt",
    image: "/growthplays/outbound.jpg",
    content: `Automate sales email flows with Journeys by combining lead lists sourced from Apollo and Clay.

## About the Growth Play

By using Apollo, Clay, and Intempt together, you can automate key aspects of ABM workflow, including lead sourcing, enrichment, and outreach.

This use case reduces manual tasks and enhances targeting precision by ensuring seamless data flow, preventing fragmented information and missed follow-ups. It allows sales teams to maintain consistent communication, nurture leads with personalized, data-driven touchpoints, and drive conversions more effectively, all while minimizing human error and manual intervention.

## Benefits

Efficient Lead Sourcing and Enrichment: Precise targeting and data enrichment save time and improve the quality of leads.

Personalized and Automated Email Flows: Automating email journeys with personalized content boosts engagement and reduces manual effort.

Improved Targeting Precision: Enhanced lead qualification ensures outreach is focused on high-value prospects, increasing conversion chances.

Automated Follow-Up Management: Automatically managing follow-ups keeps your team focused on engaged leads, improving efficiency.

Actionable Insights and Analytics: Real-time data on open rates, replies, and conversions allows for ongoing optimization of ABM campaigns.

## How It Works

## Step 1. Source the leads

Create a targeted list of high-value companies that match your Ideal Customer Profile (ICP). Using Apollo.io, you can filter and identify potential leads based on specific criteria, ensuring your outreach focuses on high-fit leads.

### Filter the leads via Apollo.io:

Go to Apollo.io and use the search feature to find relevant accounts. Apply filters based on your specific criteria, such as industry, revenue, employee count, or region.

![Filter the leads via Apollo.io](/gp/article11/1.jpeg)

### Good to know

Here are some "cheat codes" for targeting criteria that can help you get fast, high-quality results when building lead lists:

Industry + Job Title: Narrow by industry AND decision-maker titles such as VPs or C-level executives.

Revenue + Employee Count: Target mid-sized companies (e.g., 50-200 employees, $10M-$100M revenue).

Funding Stage: Focus on companies in Series A or B for high growth and tech adoption.

Technologies Used: Target stacks that align with your product (e.g., Salesforce users).

Geography + Revenue: Combine region and revenue to filter for larger budgets.

Recent Growth Indicators: Seek companies with recent expansion or funding.

Inbound + Outbound Lead Sources: Combine activities like downloads or event attendance with outbound leads for higher intent.

Save and export companies to a CSV file.

![Save and export companies to CSV](/gp/article11/2.jpeg)

## Step 2: Enrich the data

Enhance the data to make your outreach more effective. By using Clay, you can enrich your lead data with information such as contact details and job titles, making it easier to connect with key decision-makers.

### Import the leads:

Sign up to Clay.com and create a new table; import the CSV file downloaded from Apollo.io.

![Import the leads](/gp/article11/3.jpeg)

### Choose enrichment types:

Select what you want to enrich (e.g., email addresses, LinkedIn profiles, company details).

For example, to add email addresses: Choose "Find email addresses by domain and job title."

![Choose enrichment types](/gp/article11/4.jpeg)

### Configure fields:

Map fields such as company domain and job titles so Clay can find accurate matches.

Map the Job Titles: To locate the specific contacts within the company.

![Map the Job Titles](/gp/article11/5.jpeg)

Select the Email field and run the enrichment.

![Select the Email field and run enrichment](/gp/article11/6.jpeg)

### Run the enrichment and review results:

Once the enrichment process is complete, review the new data that's been added to your table. Verify the accuracy of key fields like email addresses, job titles, and company info.

Export Data: After reviewing, you can export the enriched data:

Click "Export" and choose the format you need (e.g., CSV).

![Review results and export data](/gp/article11/7.jpeg)

## Step 3: Choose an engagement strategy

Choose the right engagement strategy to tailor email messaging such as pain-point focused emails, exclusive research insights, or curated solution offers. Each approach improves relevance and response rates.

### Strategy 1: Industry-Specific Pain Point Email – Address a key challenge in the recipient's industry and present your solution as the answer.

### Strategy 2: Exclusive Research Findings Email – Share data or studies demonstrating industry success.

### Strategy 3: Curated Solution Email – Make personalized recommendations based on unique business challenges.

## Step 4: Create lead nurturing email flows

Develop automated email sequences via Intempt to nurture leads over time using personalized and strategic messaging.

### Set up your data source:

Create a new data source in Intempt and import the enriched CSV with attributes like first name, company size, email, industry, and role.

### Create a journey:

In the Journeys section, select "Create journey."

Set a journey trigger based on the CSV lead list imported. All users imported from CSV will enter the journey.

![Set journey trigger](/gp/article11/8.jpeg)

### Set up email flows:

Use the "Send Email" action within the journey to create personalized outreach emails.

![Set up email flows](/gp/article11/9.jpeg)

Create emails based on the selected engagement strategy (refer to Step 3).

![Create emails based on engagement strategy](/gp/article11/10.png)

### Good to know

Refer to Destinations for a full guide on connecting your email account.

### Automate engagement and follow-ups:

Enable the option to automatically unenroll users from the journey if they respond to your email to remove leads from the sequence once they respond, ensuring your follow-up efforts focus on the right contacts.

![Automate engagement and follow-ups](/gp/article11/11.jpeg)

Use the "Delay" control to schedule follow-up emails at appropriate intervals, such as sending the next email after a 1-day delay.

![Use Delay control](/gp/article11/12.jpeg)

![Delay control settings](/gp/article11/13.png)

Before starting the journey, set a conversion goal by aiming for replies or booking a meeting.

![Set conversion goal](/gp/article11/14.jpeg)

## Step 5: Launch and monitor the campaign

Launch your journey once all settings are configured.

Monitor campaign performance with Intempt's journey analytics. Track:

* Email Open Rates
* Replies and Engagement
* Journey Conversion Rates
* Funnel Drop-Offs: Identify at which point leads drop off within the journey funnel.

![Funnel Drop-Offs](/gp/article11/15.png)

Use insights to improve targeting and email content.

## FAQs

`,
  },
  "welcome-feature-adoption": {
    title: "Welcome & feature adoption",
    image: "/growthplays/welcome.jpg",
    content: `Combine the welcome messages with educational content about key features to quickly engage new users and encourage feature adoption.

## About the Growth Play

Engaging new users after they sign up and encouraging them to adopt key features is crucial for long-term retention.

This use case focuses on creating a personalized journey that sends a series of targeted email messages to new users, helping them get started and adopt the app's essential features.

## Benefits

Increased user engagement: Welcome messages and educational content help new users get started quickly and stay engaged.

Higher feature adoption: Educating users about key features increases the likelihood of them using and benefiting from those features.

Enhanced user satisfaction: Providing timely and relevant information improves the overall user experience.

Improved retention rates: Engaged users who understand the app's value are more likely to continue using it.

## How It Works

To illustrate the use case, we will refer to a made-up project management app, "Otto."

## Step 1. Track, define, and segment users

Start by installing Intempt's JavaScript SDK for web or iOS SDK for mobile to begin capturing user activity. Once integrated, identify and track key events like user_signup, feature_used, create_project, create_task, invite_team_member, create_prediction, and view_dashboard — making sure to include the user's email attribute for future communication.

Then, go to the Segments section to create behavioral segments such as:

* New Users – those who just signed up
* Activated Users – those who completed all key actions

## Step 2. Set up the journey for welcome and feature adoption

Journeys allow you to automate the sending of emails based on user behavior. In this case, we will create a journey that sends new users a series of welcome and educational emails.

### Create a new journey:

Go to the Journeys section and create a new journey named "Welcome and Feature Adoption."

### Add the trigger:

Trigger: User enters the New users segment.

### Add email actions:

### Email 1: Welcome Email

**Subject:** Welcome to Otto!

**Body:**

Hi [User Name],

Welcome to Otto! We're excited to have you on board. Otto is here to help you streamline your project management and boost your team's productivity.

To get started, here's a quick guide to creating your first project.

[Create Your First Project Link]

Best,
The Otto Team

### Email 2: Introduction to Key Features

**Subject:** Discover Otto's Powerful Features

**Body:**

Hi [User Name],

Now that you've signed up, it's time to explore Otto's powerful features.

Here are a few things you can do:

Create and manage tasks: Keep track of your tasks and deadlines.

Invite team members: Collaborate with your team in real-time.

Use AI predictions: Optimize your project planning with AI insights.

[Learn More About Features Link]

Happy exploring,
The Otto Team

### Email 3: Encouraging First Action

**Subject:** Get Started with Your First Project

**Body:**

Hi [User Name],

Have you created your first project yet?

It's easy to get started with Otto.

[Create Your First Project Link]

Remember, we're here to help you every step of the way.

Best,
The Otto Team

### Email 4: Invite Team Members

**Subject:** Collaborate with Your Team

**Body:**

Hi [User Name],

Teamwork makes the dream work! Invite your team members to Otto and start collaborating in real-time.

[Invite Team Members Link]

Best,
The Otto Team

### Email 5: Create and Manage Tasks

**Subject:** Organize Your Tasks Efficiently

**Body:**

Hi [User Name],

Keep your projects on track by creating and managing tasks.

It's simple and effective.

[Create and Manage Tasks Link]

We're here to support you,
The Otto Team

### Email 6: Explore AI-Based Predictions

**Subject:** Leverage AI for Better Planning

**Body:**

Hi [User Name],

Discover how Otto's AI-based predictions can help you optimize your project planning and achieve better results.

[Explore AI Predictions Link]

Happy planning,
The Otto Team

### Email 7: View and Analyze Your Dashboard

**Subject:** Gain Insights with Your Dashboard

**Body:**

Hi [User Name],

Your dashboard is a powerful tool to monitor your project's progress and analyze key metrics.

Check it out now.

[View Dashboard Link]

Best,
The Otto Team

### Add controls:

**Delay:** Add delays between emails to space out the communication (e.g., 2 days after Email 1, then 3 days after Email 2, etc.).

**Conditions:** Use conditions to check if the user has performed specific actions (e.g., created a project, invited team members) and adjust the journey flow based on these actions.

## Example Journey Flow

Trigger: User enters the New users segment.

Send Email: Welcome Email.

Delay: 2 days.

Send Email: Introduction to Key Features.

Delay: 3 days.

Condition: Has the user created a project?

Yes: Proceed to next step.

No: Send Email – Encouraging First Action.

Delay: 3 days.

Condition: Has the user invited team members?

Yes: Proceed to next step.

No: Send Email – Invite Team Members.

Delay: 3 days.

Condition: Has the user created and managed tasks?

Yes: Proceed to next step.

No: Send Email – Create and Manage Tasks.

Delay: 3 days.

Condition: Has the user explored AI-based predictions?

Yes: Proceed to next step.

No: Send Email – Explore AI-Based Predictions.

Delay: 3 days.

Condition: Has the user viewed and analyzed the dashboard?

Yes: End journey.

No: Send Email – View and Analyze Your Dashboard.

End Journey: Complete the journey.

### Set a conversion goal:

Before starting the journey, set a conversion goal to measure effectiveness (e.g., for users to enter the Activated Users segment, indicating they completed all key actions).

Define exit criteria so users who achieve the goal stop receiving onboarding emails.

## Step 3: Monitor and optimize the journey

### Start the journey:

Once configured, start the journey in Intempt.

### Monitor performance:

Use Intempt's Journey Analytics to track key metrics such as triggered journeys, conversions, conversion rate, days to convert, and engagement breakdowns.

### Adjust and optimize:

Based on analytics, refine email content, test timing, personalize messages, analyze feedback, and monitor engagement to improve performance.

## FAQs

`,
  },
  "abandonment-recovery": {
    title: "Abandonment recovery",
    image: "/growthplays/abandonment.jpg",
    content: `Merge previous browsing behavior and a cart abandonment action into a comprehensive recovery flow that includes tailored messaging to maximize revenue recovery.

## About the Growth Play

Cart abandonment is one of the biggest challenges negatively impacting any online store's conversion rate and revenue. The common solution is to send simple cart reminders to nudge users into completing their purchases. However, this one-size-fits-all approach rarely works if the customers do not notice the email immediately.

With Intempt, you can go several steps further by creating multistep conditional workflows that leverage their behavioral data and use predictive attributes so you send personalized reminders and offers for each user's segment.

## Benefits

Increased revenue recovery. Tailored messaging can effectively re-engage customers and encourage them to complete their purchases, recovering lost revenue.

Enhanced customer experience. Personalized follow-up messages based on browsing behavior and cart contents provide a more relevant and engaging experience.

Higher conversion rates. Targeted recovery campaigns can lead to higher conversion rates and improved sales performance.

Data-driven optimization. Leveraging user behavior data allows for continuous optimization of recovery strategies.

## How It Works

## Step 1. Set up tracking for new user activity and define key user events

Integrate Intempt's SDK into your e-commerce website to start tracking user activities. Follow the Javascript SDK or Shopify integration guide to ensure proper setup. Track user activities such as browsing products, adding items to the cart, starting checkout, and completing a purchase (e.g., page_view, add_to_cart, checkout_start, purchase).

### Good to know

Ensure that you track users' email attribute so you can send emails to them. This can be done by a separate popup for newsletter subscriptions or by incentivizing users to sign up before starting the checkout process.

## Step 2. Create segments and Journeys based on user behavior

### Create segments in Intempt:

* Cart Abandoners: Users who added items to their cart but did not complete the purchase within 1 hour.
* Frequent Browsers: Users who frequently browse products but rarely add items to their cart.

### Create a new journey:

Go to the Journeys section and create a new journey named "Abandonment Recovery".

### Trigger:

Cart abandonment (add_to_cart event without a corresponding purchase event within 1 hour).

### Add email actions:

### Email 1: Friendly Reminder

**Subject:** Did you forget something?

**Body:**

Hi [User Name],

We noticed that you left some items in your cart.

Don't miss out on these great products!

[View Your Cart Link]

Best,
The [Your Store] Team

### Email 2: Special Offer

**Subject:** Here's a special offer for you!

**Body:**

Hi [User Name],

We noticed you left some items in your cart.

As a thank you for shopping with us, here's a special offer just for you. Use code SAVE10 at checkout to get 10% off your purchase.

[View Your Cart Link]

Happy shopping,
The [Your Store] Team

### Email 3: Last Chance

**Subject:** Last chance to complete your purchase!

**Body:**

Hi [User Name],

This is your last chance to complete your purchase.

The items in your cart are going fast, so don't wait too long!

Use code SAVE10 at checkout to get 10% off your purchase.

Offer expires in 24 hours.

[View Your Cart Link]

Best,
The [Your Store] Team

### Add controls:

**Delay:** Add delays between emails to space out the communication (e.g., 1 hour after the first email and 1 day after the second).

**Condition:** Use conditions to check if the user has completed the purchase. Adjust the journey flow based on these actions.

## Example Journey Flow

Trigger: Users that enter the Cart Abandoners segment.

Send Email: Friendly Reminder.

Delay: 1 day.

Condition: Has the user completed the purchase?

Yes: End journey.

No: Add a condition to check if the user is a Frequent Browser:

Frequent Browser: Send Email with 20% Discount

**Email: Special Offer**

**Subject:** Here's a special offer for you!

**Body:**

Hi [User Name],

We noticed you left some items in your cart.

As a thank you for your interest, here's a 20% discount at checkout.

[View Your Cart Link]

Happy shopping,
The [Your Store] Team

Not Frequent Browser: Send Email with 10% Discount

**Email: Special Offer**

**Subject:** Here's a special offer for you!

**Body:**

Hi [User Name],

We noticed you left some items in your cart.

Here's a 10% discount at checkout just for you.

[View Your Cart Link]

Happy shopping,
The [Your Store] Team

Delay: 1 day.

Condition: Has the user completed the purchase?

Yes: End journey.

No: Send Email – Last Chance.

## Step 3: Set up an advanced journey with lifecycle agent

### Create the lifecycle agent:

Navigate to the Agents section in Intempt and create a new Lifecycle agent.

Select "Purchase" as the goal event.

Under User inclusion, select only users that performed the add_to_cart event to train data and create a purchase likelihood prediction.

### Create a new journey:

Go to the Journeys section and create a new journey named "Advanced Abandonment Recovery".

### Add the trigger:

Trigger: Users that enter the Cart Abandoners segment.

### Add condition based on likelihood prediction:

Use Intempt's Lifecycle agent to score purchase likelihood. Create conditions to segment users into high, medium, and low likelihood to purchase.

### Add email actions for each likelihood segment:

* High Likelihood: Friendly Reminder → Last Chance.
* Medium Likelihood: Special Offer (10% discount) → Follow-Up Email.
* Low Likelihood: Last Chance with Bigger Discount (20% discount) → Follow-Up Email.

### Add controls (delays, conditions to check for purchase completion).

## Step 4: Set goals and exit rules

### Set a conversion goal:

Before starting the journey, set a conversion goal to measure its effectiveness. We recommend selecting the "Purchase" (or "Placed an order" if named differently) event to track your conversions.

### Define exit criteria:

Decide whether users should exit the campaign once they achieve the goal. This ensures that users who have completed the purchase do not continue to receive recovery emails. You can select the same "Purchase" event as an exit criteria.

![Set goals and exit rules](/gp/article13/1.jpeg)

## Step 5: Monitor and optimize the journey

### Start the journey:

Once configured, start the journey in Intempt.

### Monitor performance:

Use Intempt's Journey Analytics to track metrics like triggered journeys, conversions, conversion rate, days to convert, and engagement breakdowns.

Delivered: The number of successful deliveries of communications like emails or notifications as part of the journey. This metric helps gauge the reach of your communications and the effectiveness of the delivery process.

![Delivered metric](/gp/article13/2.png)

### Adjust and optimize:

Refine email content, test timing, personalize messages, and monitor engagement to improve performance.

## FAQs

`,
  },
  "proactive-churn-prevention": {
    title: "Proactive Churn Prevention",
    image: "/growthplays/proactive-churn.jpg",
    content: `Turn classic churn prevention methods into a proactive retention strategy that engages customers based on their interaction patterns to prevent churn.

## About the Growth Play

This Growbook walks you through building a proactive churn prevention flow that spots churn before it happens.
Instead of reacting to lost users, you'll learn how to:

Track early signals like missed logins or declining product usage

Build dynamic segments based on churn risk

Trigger multi-step, personalized journeys designed to acquire and retain at-risk users

## Benefits

Detect churn before it happens: Use behavioral signals to catch signs of disengagement early, before users go cold.

Boost repeat purchase rates: Automatically re-engage customers who haven't logged in or slowed down their usage.

Increase LTV: Deliver timely nudges that keep your best users active and loyal.

Automate retention: Replace one-off win-back emails with always-on journeys that adapt in real time.

## How It Works

To illustrate the use case, we will refer to a made-up project management app, similar to Asana called "Otto."

## Step 1: Set Up Tracking for User Activity

To start, install the Intempt JavaScript SDK. This will enable GrowthOS to track actions like logins and session frequency, page and feature usage, sign-ups and trial starts, and completed tasks or missed milestones.

## Step 2: Create a Qualification Agent

In a pre-monetization flow, our qualification agent can be used to qualify and route leads based on their 'Fit' and 'Activity'.

In GrowthOS, head to Agents and create a new Qualification Agent named 'Churn Risk Agent'. Set up Fit Criteria — to define your ideal user (e.g., location, company size, industry) and Activity Criteria — to track meaningful behaviors (e.g., sign up, task creation, email clicks)

![Create Qualification Agent](/gp/article14/1-min.png)

![Set up Fit Criteria](/gp/article14/2-min.png)

![Set up Activity Criteria](/gp/article14/3-min.png)

![Configure Criteria](/gp/article14/4-min.png)

This agent will assign each user a Fit Score — how well they match your ideal persona — and an Activity Score — how engaged they are, based on behavior.

Use weight to prioritize high-intent actions, and decay to reduce the value or impact of an activity over time.

![Use weight and decay](/gp/article14/5-min.png)

## Step 3: Build Real-Time Segments

In a post-monetization flow, qualification isn't necessary — your users are already customers. Instead, use Segments to define activity-based criteria that reflect how they engage with your product. This gives you a direct way to build tailored journeys for both power users and those showing early signs of churn.

For pre-monetization flow, head to the Segments tab and create new segments using combinations of Fit Score (how well a user matches your ideal customer profile) and Activity Score (how engaged they are).

![Create segments for pre-monetization](/gp/article14/6-min.png)

Create a new Segment called 'At Risk' with high Fit Score and low Activity Score. These users match your ICP but aren't engaging. Reach them with personalized reactivation journeys.

Next, create a new Segment called 'High Potential' with high Fit Score and high Activity Score. These are your ideal customers actively engaging right now — perfect for feature expansion, upgrades, or exclusive offers to boost LTV.

Next, create a new Segment called 'Curious Visitors' with low Fit Score and high Activity Score. They're exploring actively but may not be a great long-term fit yet. Consider light-touch journeys to qualify further or convert if relevant.

These segments auto-update based on real-time behavior — no manual tagging needed.

For post-monetization flow, head to the Segments and create a new segment for users called 'Slipping Users' using actual behavioral data. Select events like 'completed onboarding', 'created ml task', 'visited a feature page' more than twice in the past 14 days and 'login' once in the past 10 days.

![Create Slipping Users segment](/gp/article14/7-min.png)

## Step 4: Multi-Step Retention Journeys

In Journeys, build a personalized flow for each segment. Each journey is triggered by real-time changes in Fit + Activity Score, so the moment someone starts slipping — the right touchpoint kicks in.

For pre-monetization flow, create a new journey named 'At Risk Journey' and select the 'At Risk' segment as the trigger. These users are a great match — but they've gone cold.

![Create At Risk Journey](/gp/article14/8-min.png)

### Journey Example:

Day 0: Reminder of the last feature or page visited ("Still exploring Smart Dashboards?")

Day 2: Email with curated use cases tailored to their role or company size

Day 4: Invite to a live onboarding session or async walkthrough

Day 6: Friendly check-in from a success manager or founder ("Need help getting value from [Feature X]?")

Next, create 'High Potential Journey' and select the 'High Potential' segment as the trigger:

Day 0: Thank-you message + "Next best step" CTA (e.g., explore advanced features)

Day 2: Early access to a new feature or roadmap preview

Day 5: Invite to community, referral program, or customer panel

Day 7: Pro-tip email with advanced use cases they haven't tried yet

Next, create 'Curious Visitors Journey' and select the 'Curious Visitors' segment:

Day 0: "Is Otto right for you?" interactive guide or onboarding quiz

Day 2: Role-specific use case spotlight or video

Day 5: Offer a quick 1:1 session or group demo

Day 7: "Still exploring?" email with a light-touch CTA (download checklist, save progress, etc.)

For post-monetization, create a new journey named 'Slipping Users' and select that segment as the trigger. Their usage is slowing — proactive action is needed.

### Journey Example:

Day 0: Check-in email: "We noticed a drop — anything we can help with?"

Day 2: Recommend underused or new features they haven't tried

Day 4: Offer priority support or beta access to an upcoming feature

Day 6: Invite to feedback call or customer roundtable

![Journey flow example](/gp/article14/9-min.png)

## Pro Tip

Use Branch Conditions in GrowthOS Journeys to dynamically adjust flows based on actions like opens, clicks, or conversions — keeping your messaging relevant without extra setup.

## Step 5: Track & Optimize

Open your journey and monitor the following metrics — Entered: Users who qualified and entered journey, Messaged: How many received the message, In Progress: Users still progressing through steps, Completed: Finished full journey, Exited Early: Dropped out before completion, Converted: Took desired action (Subscribed to basic/ premium plan, sign up, invite team members)

![Track and optimize metrics](/gp/article14/10-min.png)

## FAQs

`,
  },
  "checkout-flow-optimization": {
    title: "Checkout flow optimization",
    image: "/growthplays/checkout.jpg",
    content: `Compare multi-step vs. single-page checkout processes to identify what reduces abandonment and optimize the final steps of your funnel.

## About the Growth Play

This Growbook walks you through building a checkout flow optimization framework using GrowthOS. Rather than relying on assumptions, you'll test how users interact with different checkout experiences and personalize interventions based on their drop-off behavior.

With GrowthOS, you can track key drop-off points across single-page vs. multi-step flows, segment users based on where they exited, launch personalized journeys based on real-time segments and experiment with checkout flow variations using GrowthOS Experiences.

## Benefits

Validate what works. A/B test single-page vs. multi-step checkout to identify the best-performing flow.

Recover drop-offs. Trigger personalized interventions based on where and when users leave.

Optimize UX. Spot friction, educate users, and smooth out final purchase steps.

Increase conversions. Convert more checkouts by aligning flow, messaging, and follow-ups in real time.

## How It Works

To illustrate the use case, we will refer to an ecommerce store, "Threadly".

## Step 1: Set up tracking for new user activity and define key user events

Integrate Intempt's SDK into your e-commerce website to start tracking user activities. Follow the JavaScript SDK or Shopify integration guide to ensure proper setup. Track user activities such as browsing products, adding items to the cart, starting checkout, and completing a purchase (e.g., page_view, add_to_cart, checkout_start, and purchase).

Since we need to track specific steps in the checkout process, we also need to create some custom events. To do this, go to Create Event for example "Reached payment page" and select the source: "ThreadLY shopify" then select the appropriate attribute "URL".

![Create custom events](/gp/article15/1-min.png)

### Good to know:

Ensure that you track the user's email attribute so you can send emails to them. This can be done by a newsletter signup popup or by incentivizing users to sign up before starting checkout.

## Step 2: Create Behavioral Segments Based on Drop-Off Patterns

Navigate to the Segments section and create new segments based on the tracked events. For instance:

Cart Abandoners: Users who added items to their cart but did not complete the purchase within 1 hour.

Checkout Drop-offs: Users who initiated checkout but did not complete the purchase within 1 hour.

Payment Incomplete: Users who placed draft order but did not complete the purchase within 1 hour.

![Create behavioral segments](/gp/article15/2-min.png)

## Step 3: Personalize Checkout Flow Using Experiences

Navigate to the Experiences tab and in the experiment setting, run an A/B test for Single-page checkout (fast, minimal steps) and Multi-step checkout (guided, simpler layout per screen)

Go to New Experience

Click the toggle switch to the right for experiment

![Create A/B test experience](/gp/article15/3-min.png)

This will help determine which checkout style performs better with different audiences.

![Checkout style performance](/gp/article15/4-min.png)

## Step 4: Launch Recovery Journeys for Each Segment

Each segment should trigger a customized multi-step journey based on user behavior and friction point.

### Create a new Journey named "Cart Abandoners".

**Trigger:** Cart Abandoners segment.

**Email 1:** Reminder — "You left something behind".

**Email 2:** Urgency nudge — "Popular items sell fast!".

**Email 3:** Incentive (free shipping or discount).

**Branch condition:**

Opened but didn't click → Send SMS.

Clicked but didn't convert → Show a timer urgency banner on site.

### Create a Checkout Drop-off Journey.

**Trigger:** Checkout Drop-offs segment.

**Email 1:** Explain return policies / secure checkout.

**Email 2:** Educational content — "Still have questions?".

**Email 3:** Invite to live chat or support call.

**Branch conditions:**

Visited FAQ but didn't convert → Offer help via SMS.

Ignored email → Try retargeting ad with testimonial.

### Create a Payment Incomplete Journey.

**Trigger:** Payment Incomplete segment.

**Email 1:** Nudge — "Ready to complete your purchase?".

**Email 2:** Saved cart link + social proof ("10,000+ shoppers love Threadly").

**Email 3:** Offer help — "Have questions before buying?".

**Branch conditions:**

Visited FAQ but didn't convert → Offer help via SMS.

Clicked saved cart but didn't convert → Trigger time-limited offer.

![Branch conditions](/gp/article15/5-min.png)

## Step 5: Track & Optimize

Open your journey and monitor the following metrics- Entered: Users who qualified and entered journey, Messaged: How many received the message, In Progress: Users still progressing through steps, Completed: Finished full journey, Exited Early: Dropped out before completion, Converted: Took desired action (Ordered Product).

![Track and optimize metrics](/gp/article15/6-min.png)

Test and iterate on timing, incentives vs. education, multi-step vs. single-page performance, and messaging channels like email, SMS, and push notifications.

## FAQs

`,
  },
  "keep-loyal-customers-engaged": {
    title: "Keep Loyal Customers Engaged and Renewing",
    image: "/growthplays/loyal-customers.jpg",
    content: `Combine renewal campaigns with retention flows and special recognition for VIP customers, ensuring continuous engagement and appreciation.

## About the Growth Play

Managing renewals and recognizing your most loyal customers shouldn't be an afterthought but too often, they are. Many teams rely on last-minute renewal emails or one-size-fits-all loyalty programs. The result? Higher churn, reduced loyalty, and missed opportunities to turn great customers into lifelong advocates.

This Growbook shows you how to use GrowthOS to unify your renewal, retention, and VIP recognition strategies into one connected system. You'll track engagement signals, build dynamic segments for at-risk and high-value users, and trigger tailored journeys — so that every user feels seen, supported, and rewarded.

We'll use Otto, a demo SaaS platform, as an example.

## TL;DR

Track user activity and behavioral signals to identify accounts nearing renewal, disengaging users, and high-value VIPs.

Build dynamic segments like "Renewal Approaching," "Slipping Users," and "VIP Users" that update in real time.

Trigger tailored journeys for each group — from renewal reminders to feature nudges to VIP recognition emails.

Personalize in-product experiences: show different CTAs, dashboards, or banners based on engagement or plan.

Use unified Journey and Experience analytics to monitor performance and optimize over time.

Result: A system that renews proactively, retains intelligently, and rewards loyalty at scale.

## Benefits

Drive timely renewals: Identify accounts approaching renewal dates and nudge them with personalized, well-timed campaigns.

Prevent churn before it starts: Detect early signs of disengagement and automate proactive retention journeys.

Recognize your best customers: Deliver exclusive perks, offers, or recognition to high-value accounts based on behavior, not just spend.

Build long-term loyalty: Use automated journeys to keep users engaged and appreciated throughout their lifecycle.

## How It Works

## Step 1: Track user engagement

Install Intempt's JavaScript SDK: Begin tracking user and account activity across your app or site.

Check or define key Events: 'login', 'created an object', 'created ml task' and 'invite team members' — along with others you define — representing meaningful actions across levels to provide the behavioral and lifecycle signals needed for renewal and VIP segmentation.

![Check or define key events](/gp/article16/1-min.png)

## Step 2: Create real-time segments

Navigate to segments and define the following:

"Renewal Approaching": 'Subscribed to a basic plan' has been performed in the last 27 days and 'subscribed to premium plan' has not been performed in the last 5 days.

"Slipping Users": 'Login' has not been performed in the last 14 days and 'created an object' and 'created ml task' has not been performed in the last 10 days.

"VIP Users": 'Login' has been performed at least 10 times in the past 30 days and 'subscribed to premium plan' has been performed in the last 1 month.

![VIP Users segment](/gp/article16/2-min.png)

These segments update dynamically based on real-time user and account behavior.

## Step 3: Build multi-branch journeys

Go to Journeys, and build three separate flows:

### a. Renewal Journey

**Trigger:** Segment — "Renewal Approaching"

Day 0: Reminder email with renewal CTA

Day 2: Feature highlights or value recap

Day 5: Personalized message and offers

Optional branch: Additional offer incentive if no response

### b. Retention Journey

**Trigger:** Segment — "Slipping Accounts"

Day 0: Friendly check-in ("Need help getting value from Otto?")

Day 2: Suggested feature not yet used

Day 4: Link to async product walkthrough or quick call

Exit if user re-engages with core feature

### c. VIP Recognition Journey

**Trigger:** Segment — "VIP Accounts"

Day 0: "Thanks for being a valued customer" email with badge or gift

Day 3: Invite to roadmap preview or customer advisory panel

Day 7: Early access to a new feature or beta program

![VIP Recognition Journey](/gp/article16/3-min.png)

## Step 4: Personalize site content for VIPs and Slipping Users

In Experiences, create personalized experiences for the "VIP Accounts" segment:

Homepage header: "Welcome back! You're one of our top customers, here's what's new."

Pricing page: Highlight premium features unlocked

Dashboard: Display badge or loyalty streak tracker

Create an Experience for the "Slipping Users" segment:

Homepage banner → "We haven't seen you in a while. Need help finding what's valuable to you?"

Dashboard CTA → Suggest a feature they haven't used yet: "Try automating your first project — it's just a 3-minute setup."

Navigation bar → Add a "Get Help" or "Restart Onboarding" shortcut for quick reactivation

![Slipping Users experience](/gp/article16/4-min.png)

## Step 5: Monitor journey and experiences performance

Use Journey Analytics to track:

Entered

Messaged

Converted (e.g., renewal completed, core feature used, VIP invite accepted)

Exited

![Journey Analytics](/gp/article16/5-min.png)

Use Experience Analytics to track: Conversion rate, Lift.

Create Dashboard in Analytics and add the Journey and Experience Metrics to get a unified analytics view.

![Create Dashboard](/gp/article16/6-min.png)

## Iterate and scale

Add branches for different renewal plans (monthly vs annual).

Expand VIP criteria to include product usage depth or NPS.

Layer in A/B tests to optimize message timing, copy, and offer type.

## FAQs

`,
  },
  "discover-feature-adoption-cohorts": {
    title: "Discover Feature Adoption Cohorts for Your Product",
    image: "/growthplays/feature-cohorts.jpg",
    content: `Analyze which product features drive activation and long-term value, then use that insight to personalize onboarding and retention.

## About the Growth Play

In SaaS, product usage is never uniform. Some users adopt critical features quickly. Others get stuck or never activate key functionality.

This Growbook shows you how to uncover the features your best users adopt and how to use that knowledge to build smarter onboarding, trigger personalized nudges, and inform better product roadmap decisions.

We'll use Otto, a demo project management SaaS platform, as our example.

## TL;DR

Track and define core feature usage events ('created ml task', 'invite team members, 'created an object' and 'visited dashboard')

Build Insights reports to measure adoption across cohorts

Break down behavior by 'subscription', 'company size', or 'region' to spot trends

Create real-time segments like "Dashboard Adopters" or "Inactive Users"

Launch onboarding journeys tailored to feature usage (or lack of it)

## Benefits

Map adoption by cohort: See which features are used by your most engaged and valuable users.

Spot activation bottlenecks: Identify features that are not activated by users that stall or churn.

Personalize onboarding: Trigger nudges based on what users have or haven't tried.

Align teams around real usage: Give product, marketing, and success a shared view of what users actually do — so everyone works from the same source of truth.

## How It Works

## Step 1: Set up tracking for user activity

### Install Intempt's JavaScript SDK:

Integrate Intempt's JavaScript SDK into your product to begin capturing behavioral events.

Follow the JavaScript SDK integration guide to ensure proper setup.

## Step 2: Define the events you want to track

In GrowthOS, go to Events and verify that the following key feature events are being tracked: 'created ml task', 'invite team members', 'created an object' and 'visited dashboard'.

These represent meaningful actions across different levels of product adoption.

You can also define new events if needed like 'scheduled sprint', 'joined workspace' and 'exported report'.

## Step 3: Build your Insights report

Navigate to Analytics- 'Insights' and create a new report.

![Build Insights report](/gp/article17/1-min.png)

Choose a feature usage event to analyze for example, 'visited dashboard'.

![Choose feature usage event](/gp/article17/2-min.png)

Select a metric such as:

* Count of users who triggered the event
* Average frequency per user
* % of active users performing the action

![Select metric](/gp/article17/3-min.png)

## Step 4: Break down usage by user attributes

Use the 'breakdown' field to compare behavior across:

* Plan tier (e.g., Free vs Pro)
* Company size
* Industry

![Break down usage by user attributes](/gp/article17/4-min.png)

Apply filters to narrow your scope:

* Date range (e.g., last 30 days)
* Region (e.g., North America)
* Account type (e.g., trial vs paid)

### Spot behavior patterns

You might notice:

Dashboard usage is 5x higher among Premium plan users.

Smaller teams rely heavily on 'invite team members', while larger teams don't.

Healthcare companies engage early with ML task creation.

These behavioral patterns help you identify cohorts not based on who they are, but what they actually do.

## Step 5: Turn insights into segments

Based on what you discover, create real-time segments like:

* "Dashboard Adopters": users who visited the dashboard 3+ times in the first 7 days
* "High Value Onboarders": users who triggered 3+ product features in week one
* "Inactive Users": users who signed up but didn't trigger 'exported report'

![Turn insights into segments](/gp/article17/5-min.png)

## Step 6: Trigger targeted journeys

Use these segments to trigger targeted journeys:

* Encourage "High Value Onboarders" to explore automation features
* Re-engage "Inactive Users" with reminders or walkthroughs
* Offer additional features to "Dashboard Adopters" for more activation

![Trigger targeted journeys](/gp/article17/6-min.png)

Note: for detailed walkthrough about creating a Journey, check out the Growbook on Personalized Category Upsell

## Step 7: Measure and optimize

Continue tracking feature usage over time using updated Insights Reports.

Compare adoption before and after journeys are launched.

Identify which cohorts respond best and evolve your strategy based on what actually works.

## FAQs

`,
  },
  "fix-dropoffs-cart-purchase": {
    title: "Fix Dropoffs Between Cart and Purchase",
    image: "/growthplays/dropoffs.jpg",
    content: `Visualize and recover revenue-losing dropoff points in your ecommerce checkout flow using real-time funnel insights.

## About the Growth Play

In ecommerce, abandoned carts are only half the story. Real dropoff often happens after a user adds something to their cart, but before the final confirmation. That space between interest and purchase is full of friction: logins, shipping forms, payment pages, loading spinners.

This Growbook shows you how to use GrowthOS Funnel Analytics to map your checkout flow, identify where users drop off, and take action in real time. You'll learn how to turn your biggest leaks into high-leverage optimization opportunities, whether it's for first-time shoppers or high-value returning customers.

We'll use Threadly, a demo fashion ecommerce site, as our example.

## TL;DR

Problem: Cart abandonment isn't the only issue — users often drop off during checkout, but most ecommerce teams don't know where or why.

Solution: Use GrowthOS Funnel Analytics to visualize every step of your checkout flow, identify where users exit, and trigger real-time recovery campaigns to bring them back.

You'll Learn How To:

Track key events from "added to cart" to "placed order"

Build funnel reports to map each step of checkout

Break down performance by device, geography, or segment

Create segments like "Dropped at Payment Info" to trigger journeys

Personalize next-session experiences for returning abandoners

Measure lift and conversion improvements over time

End Result: A clear picture of checkout friction points, automated recovery flows, and a faster path to more completed orders—all powered by real behavior.

## Benefits

Visualize dropoff in your checkout flow: See exactly where users abandon the process, from cart to payment to confirmation.

Segment by user intent: Break down funnel performance using relevant metrics for example: new vs returning users, device type, location, or campaign source.

Trigger recovery journeys instantly: Send emails, SMS, or app personalized nudges the moment someone drops off.

Optimize your UX and content: Use real data to improve specific steps in the checkout, not just guess what's broken.

## How It Works

## Step 1: Set up tracking for ecommerce behavior

### Install Intempt's JavaScript SDK:

Start by integrating the SDK to track in-session user activity across your storefront. Refer to the JavaScript SDK guide for full setup.

### Define key funnel events:

In the Events section of GrowthOS, confirm or create the following: 'viewed product page', 'added to cart', 'started checkout', 'entered shipping info', 'entered payment info' and 'placed order'.

![Define key funnel events](/gp/article18/1-min.png)

The above stated events along with other events that are listed or created by you represent meaningful actions across different levels and will serve as the core steps of your funnel analysis.

## Step 2: Create a Funnel report

Navigate to Analytics- 'Funnels' and create a new report.

![Create Funnel report](/gp/article18/2-min.png)

Define your funnel steps in sequence:

Step 1: added to cart

Step 2: started checkout

Step 3: added delivery address

Step 4: entered payment info

Step 5: placed order

Set your conversion criteria: for ecommerce, 30 minutes to 24 hours is ideal depending on your purchase cycle.

![Set conversion criteria](/gp/article18/3-min.png)

## Step 3: Apply breakdowns and filters

Use 'Breakdown' to compare funnel performance across for example: User attributes: Country and Device: desktop vs mobile

Apply 'Filters' to narrow your focus: High-intent users (visited 2+ product pages before checkout), Users from a specific geography or acquisition channel and Users in a segment like "Abandoned Checkout in last 7 days"

![Apply filters](/gp/article18/4-min.png)

### Identify dropoff points

Review the funnel report to identify where dropoff is highest:

Are users bouncing at the shipping info step? — Maybe the form is too long.

Are they disappearing at payment? — Could be trust, speed, or lack of options.

Quantify the impact: A 20% drop at payment step means 1 in 5 potential buyers never make it through.

## Step 4: Create real time segments

Build real-time segments based on funnel exits:

"Dropped at Shipping Info": "entered shipping info" NOT triggered within 15 minutes of started checkout

"Dropped at Payment Info": "entered payment info" NOT triggered within 10 minutes of "entered shipping info"

![Dropped at Payment Info segment](/gp/article18/5-min.png)

## Step 5: Trigger recovery journeys

In Journeys, build a personalized flow to re-engage these segments:

Email or SMS with a message like: "Still thinking it over? Your cart's waiting."

Include dynamic product recommendations or time-limited incentives.

Note: for detailed walkthrough about creating Journey, check out the Growbook on Personalized Category Upsell

![Trigger recovery journeys](/gp/article18/6-min.png)

## Step 5: Personalize the next session

In Experiences, create experience and use personalization to adapt site content for drop-off segments:

Homepage banner for "Dropped at Payment" users → "Still interested? Finish your order and get 10% off."

Product pages → Show urgency badges or CTA changes for returning abandoners.

![Personalize product pages](/gp/article18/7-min.png)

Note: for a detailed walkthrough about creating Personalized Experiences, check out the Growbook on Website navigation & content display.

## Step 6: Track & optimize

Use Funnel Analytics to compare conversion before and after these changes.

Monitor Journey performance: entry rate, message delivery, and conversion lift.

![Monitor Journey performance](/gp/article18/8-min.png)

Iterate on copy, timing, and touchpoint logic based on segment-specific results.

## FAQs

`,
  },
  "encourage-upgrades-user-behavior": {
    title: "Encourage Upgrades Based on What Users Do",
    image: "/growthplays/upgrades.jpg",
    content: `Adjust CTA buttons or messages on the website and in-app based on the user's lifecycle stage, encouraging them to take the next step in their journey.

## About the Growth Play

Most expansion strategies rely on sales triggers or usage thresholds, but the real signals are already in front of you, buried in everyday product usage behavior.

This Growbook shows you how to use GrowthOS to track those behaviors, segment users by lifecycle stage, and tailor CTAs or UI messages that move each user to the next logical step: from free to paid, basic to premium, or inactive to reactivated.

We'll use Otto, a demo SaaS platform for project management, to illustrate the approach.

## TL;DR

Track real product behaviors like views, logins, and feature usage to identify upgrade intent.

Create real-time segments such as "Upgrade Curious" or "Low Usage Paid Users."

Adapt website and in-app CTAs and Banners to each user's lifecycle stage using Experiences.

Trigger expansion journeys with personalized messages, offers, or walkthroughs.

Measure conversion and lift using Experience and Journey Analytics to optimize over time.

Result: A dynamic upgrade system that adjusts to user behavior and increases expansion revenue.

## Benefits

Expand revenue without adding friction: Encourage upgrades and usage nudges right inside the product.

Show the right CTA to the right user: No more one-size-fits-all upsell banners.

Use real behavior as a trigger: Target based on what users do, not who you think they are.

Boost retention through deeper usage: Expansion and engagement go hand in hand.

## How It Works

## Step 1: Track product user engagement

### Install Intempt's JavaScript SDK:

Begin tracking user and account activity across your app or site.

### Check or define key Events:

confirm the following are tracked- 'login', 'created ml task', 'invited team member', 'exported report', 'subscribed to premium plan', 'viewed upgrade plan', 'subscribed newsletter, book demo', 'product viewed'.

![Check or define key events](/gp/article19/1-min.png)

### Create additional events:

If any events are not readily available, go to create event and set conditions to create the needed event.

![Create additional events](/gp/article19/2-min.png)

These events help capture activation, collaboration, reporting, and upgrade intent — all key indicators of expansion potential.

## Step 2: Segment users by behavior

Go to segments and create real-time segments like:

"Basic plan power users": Users who have subscribed to basic plan, viewed product, logged in at least 10 times in the last 1 month and created ml task at 5 times in the last 1 month

![Basic plan power users segment](/gp/article19/3-min.png)

"Upgrade curious": Users who have viewed upgrade plan at least once in the last 5 days, subscribed newsletter and has not subscribed to premium plan.

![Upgrade curious segment](/gp/article19/4-min.png)

"Low usage paid users": Users who have subscribed to premium plan, have not logged in in the last 10 days and have not created object in the last 10 days

![Low usage paid users segment](/gp/article19/5-min.png)

These segments update dynamically based on real-time user behavior.

## Step 3: Personalize CTAs across web and in-app

In the Experiences module, create different experiences for each segment and target both your website and in-app product interface.

(Click the toggle to select Personalization)

![Personalize CTAs](/gp/article19/6-min.png)

### Example 1: Basic Plan Power Users

**Target Segment:** "Basic plan power users"

![Basic Plan Power Users target segment](/gp/article19/7-min.png)

**CTA (Web):** "Upgrade to unlock team workflows and advanced reports".

![CTA Web](/gp/article19/8-min.png)

→ Location: Homepage banner

**Banner (In-App):** Sidebar module or dashboard panel: "Ready for more? Unlock Premium Reports"

Location: In-app sidebar

### Example 2: Upgrade Curious

**Target Segment:** "Upgrade curious"

**CTA (Web):** "Still deciding? Try Premium free for 7 days"

Location: Pricing page sticky footer

**Banner or Popup (In-App):** Display after using a limited feature: "This feature is part of Premium — want early access?"

Location: Feature-gated modal

### Example 3: Low Usage Paid Users

**Target Segment:** "Low usage paid users"

**CTA (Web):** "Not getting full value? Explore what you've missed"

Location: Homepage banner or Help center sidebar

**Banner (In-App):** Tooltip: "Still haven't tried automations? Here's a 2-minute setup."

Location: Triggered on dashboard inactivity or feature hover

### Good to know:

You can also personalize- In-App Nav Bar Buttons: e.g. "Explore More Features" for upgrade-curious users and In-Product Tours: Restart onboarding or add contextual nudges for low-usage users

## Step 4: Trigger real-time expansion journeys

Go to Journeys and trigger automated nudges for each segment.

### Journey 1: Encourage Upgrade

**Trigger:** Segment = "Basic plan power users"

![Journey 1 trigger](/gp/article19/9-min.png)

Day 0: Email with upgrade benefits

![Day 0 email](/gp/article19/10-min.png)

Day 2: Reminder email highlighting premium features

![Day 2 email](/gp/article19/11-min.png)

Day 5: Limited-time discount CTA

![Day 5 CTA](/gp/article19/12-min.png)

### Journey 2: Reactivate Low Usage Paid Users

**Trigger:** Segment = "Low Usage Paid Users"

Day 0: Friendly check-in email: "Need help getting more out of Otto?"

Day 3: Video walkthrough of underused features

Day 7: "Schedule a success session" CTA

## Step 5: Track and optimize performance

### Use Experience Analytics to monitor:

* Conversion rate on CTA clicks
* Lift vs control version
* Top-performing copy per segment

### Good to know:

Add all the campaign analytics inside a dashboard for a unified view

![Experience Analytics dashboard](/gp/article19/13-min.png)

### In Journey Analytics, monitor:

* Entry volume
* Message open/click rates
* Upgrade or reactivation conversions

![Journey Analytics](/gp/article19/14-min.png)

Iterate on copy, timing, and touchpoint logic based on segment-specific results.

## FAQs

`,
  },
  "best-performing-pricing-strategy": {
    title: "Find Your Best-Performing Pricing Strategy",
    image: "/growthplays/pricing.jpg",
    content: `Test different pricing and packaging options to drive more upgrades from your current users and attract new segments.

## About the Growth Play

In SaaS, pricing isn't set-and-forget. The wrong plan structure or messaging can slow down upgrades, confuse new buyers, or miss key market segments. And yet, most teams rely on gut instinct or static pricing tables, with no way to measure what really works.

This Growbook shows you how to use GrowthOS to test pricing page variants and upgrade prompts across different user segments. You'll segment users based on usage and plan type, then tailor your CTAs, copy, and feature positioning to each group. The result? Clear, data-backed pricing strategies that convert better and scale smarter.

We'll use Otto, a demo project management SaaS platform, as our example.

### Good to know

We will be using both personalization and experiment in this growbook because price testing isn't just about pricing tiers, it's about how you message pricing to different cohorts, and what version of that message works best within each cohort.

## TL;DR – Find Your Best-Performing Pricing Strategy

Set up pricing page variants using personalization to test different plans, bundles, or discounts.

Use Experiments to A/B test performance across audience segments or entry sources.

Track conversions, clicks, and revenue impact for each pricing variant in real time.

Combine test results with filters like plan type, user intent, or geography to spot trends.

Identify top-performing price configurations and iterate with confidence — no developer lift needed.

Result: A continuous, low-effort system for optimizing pricing and packaging across user types.

## Benefits

Learn what messaging drives upgrades: Test headlines, layouts, and CTAs for specific audience segments

Tailor plans for power users vs light users: Show the right features and pricing for each stage of user growth

Expand into new customer tiers: Try packaging and plan variations for new audiences without committing to a full relaunch

Iterate with confidence: Track conversion lift and optimize based on real behavior, not gut instinct

## How It Works

## Step 1: Track product user engagement

### Install Intempt's JavaScript SDK:

Begin by tracking plan upgrades and feature interactions using Intempt's SDK. This ensures your data flows to GrowthOS. You can then segment users based on their current tier, feature usage, and upgrade history.

![Install Intempt's JavaScript SDK](/gp/article20/1-min.png)

### Check or define key Events:

Confirm the following are tracked- 'subscribed to basic plan', 'subscribed to premium plan', 'viewed upgrade plan', 'Viewed Pricing Page', 'Create user', 'subscribed newsletter' 'book demo', 'product viewed'.

![Check or define key events](/gp/article20/2-min.png)

### Create additional events:

If any events are not readily available, go to create event and set conditions to create the needed event.

These events will form the foundation for segmenting users based on their pricing path.

## Step 2: Create key pricing segments

Navigate to segments and define groups such as:

"Ready to upgrade": Users who belong to a company with more than 500 employees, visited pricing page and viewed upgrade plan in the last 7 days and not subscribed to premium plan.

![Ready to upgrade segment](/gp/article20/3-min.png)

"Heavy basic users": Users in SAAS industry who have subscribed to basic plan, created user, created object and created ml task in the last 14 days.

![Heavy basic users segment](/gp/article20/4-min.png)

"Inactive pro users": Users in the US who have subscribed to premium plan and created user OR created object less than 3 times in the past 30 days. (to categorize users who are not using key features of the product regularly)

![Inactive pro users segment](/gp/article20/5-min.png)

These segments let you personalize not just messaging — but entire pricing strategies — based on intent and behavior.

## Step 3: Create personalized pricing page variants

In Experiences, create multiple pricing page versions tailored to each segment:

(Click the toggle option to select personalization)

![Create personalized pricing page variants](/gp/article20/6-min.png)

### Variant 1 – For ready to upgrade users

Emphasize immediate value

CTA: "Upgrade Now and Get a Bonus Feature"

Highlight plan comparison with clear feature unlocks

Highlight enterprise plans for larger companies

![Variant 1 for ready to upgrade users](/gp/article20/7-min.png)

### Variant 2 – For heavy basic plan users

Focus on how current usage aligns with Pro benefits

CTA: "Looks like you're outgrowing Basic Plan, here's what you unlock next"

Add time-sensitive promotion (e.g., 14-day trial of Pro)

Add testimonials from SAAS teams who have subscribed to premium plan

![Variant 2 for heavy basic plan users](/gp/article20/8-min.png)

### Variant 3 – For inactive pro users

Position Pro plan with re-engagement incentives

CTA: "How's the Premium plan? Here's what's new and what you might've missed"

Include loyalty offers for regular users

Add a product tour button or a video walkthrough explaining the use cases of the features

![Variant 3 for inactive pro users](/gp/article20/9-min.png)

Target each experience using segment logic and display it only on the pricing page.

![Target experiences](/gp/article20/10-min.png)

## Step 4: Run A/B tests across versions

In Experiments, create A/B tests to compare different messaging strategies:

(Click the toggle option to select experiment)

![Run A/B tests](/gp/article20/11-min.png)

Target particular segment for the A/B test

### Example A/B test

Select the segment 'Heavy Basic Users' in targeting to just run the experiment for this segment

In the visual editor make different variants with/without testimonials from SAAS teams who have subscribed to the premium plan and with without special SAAS enterprise payment plans

![Visual editor variants](/gp/article20/12-min.png)

Test headline: "Upgrade to Pro" vs "Unlock Your Team's Full Potential"

![Test headline](/gp/article20/13-min.png)

Test CTA color, copy, and placement

Test full pricing table layout: stacked features vs tier comparison

(good to know: we use personalization to show different variants to different people and experiment so see which version of the plan works best for this particular group)

Monitor test confidence, conversion lift, and behavior post-upgrade.

![Monitor test results](/gp/article20/14-min.png)

## Step 5: Track outcomes and iterate

In Analytics, create a dashboard to track:

* Click-through rates on upgrade CTAs
* Conversion rate from pricing page to plan upgrade
* Plan churn or downgrade rate over time
* Experiment lift vs control

Use these metrics to double down on what's working and sunset underperforming pricing approaches.

## FAQs

`,
  },
  "signals-to-pipeline": {
    title: "How to get from signals to pipeline without the scramble",
    image: "/growthplays/signals.jpg",
    content: `Focus on the right accounts at the right moment, with enough context to start a real conversation.

## About the Growth Play

Most lists tell you who to contact. What reps need is when and why now. This growbook shows how to use GrowthOS to turn product behavior and fit criteria into clear, living queues for outreach. You'll enrich just the fields you actually use, qualify leads with simple, transparent rules, and act on signals quickly without juggling tools.

We'll use Otto (a demo SaaS platform) to illustrate the approach.

## TL;DR – GrowthOS for Sales Reps

Import leads from your sources and enrich only what helps outreach (role, tech stack, company type).

Use a Qualification Agent to score Sales Readiness with Fit + Activity.

Build sales-ready segments (e.g., High Fit + High Activity) that update in real time.

Launch a Journey for those segments: short sequences, sensible delays, and behavior-based routing.

Personalize with Smart Snippets that pull from research fields automatically.

Alert reps on key actions (reply, meeting booked) and auto-create Tasks for follow-through.

Track replies, meetings, and pipeline impact in Journey Analytics and Dashboards.

Result: Fewer cold touches, more timely conversations.

## Benefits

Prospect where intent is fresh. Work the accounts showing meaningful, recent behavior.

One definition of "ready." Fit and intent live in one place, so Marketing and Sales share the same thresholds.

Arrive with context. Recent actions and role info are attached to the record you're working.

Reduce swivel-chair time. Research, scoring, outreach, alerts, and measurement run in one system.

Measure what moves deals. See which signals correlate with meetings and wins, then tune the rules.

## How It Works

## Step 1: Define and track Goal Events

Check or define key Events to confirm the following are tracked: 'added to cart', 'clicked on product', 'started checkout' and create new events If any events are not readily available from 'create event'.

![Define and track Goal Events](/gp/article21/1-min.png)

## Step 2: Bring in leads and add only useful context

Import users/accounts from your list or connected sources. Use a Research Agent to enrich the few fields that change how you write or route (role, seniority, tech stack, industry). If contact details are missing, fill just what you need for the first touch.

![Bring in leads and add only useful context](/gp/article21/2-min.png)

## Step 3: Define "ready" with Fit + Activity

Create a Qualification Agent that scores Sales Readiness using:

Fit: firmographics and ICP traits (company size, industry, stack match).

Activity: recent, high-signal behavior (e.g., viewed pricing, invited teammates, hit usage thresholds).

![Define ready with Fit + Activity](/gp/article21/3-min.png)

## Step 4: Build sales-ready segments

Create segments like 'High Fit + High Activity', 'High Fit + Medium Activity'.

![Build sales-ready segments](/gp/article21/4-min.png)

## Step 5: Turn signals into outreach with Journeys

Launch a Journey for your top segment. Keep it short: two or three steps with natural spacing.

Branch on behavior: if they engage, move them forward; if they don't, slow down or re-score.

Use Smart Snippets: pull research fields into the message so it reads like you wrote it.

Notify the human: send a lightweight alert on replies or meeting bookings.

## Step 6: Measure and tighten the loop

In Journey Analytics and Dashboards, look at: replies, meetings created, cycle time, and opportunities/wins by readiness level. Notice which signals show up most often before a meeting, and adjust your Agent weights or segment rules accordingly.

![Measure and tighten the loop](/gp/article21/5-min.png)

## Good to Know

Keep the score simple. Clear levels beat opaque formulas; reps should know the "why" at a glance.

Fewer signals, stronger signal. Two or three reliable intent events usually outperform long lists.

Auto-create Tasks for reps when key actions fire: call, email, LinkedIn, or a quick prep checklist. If Deals are part of your workspace, create or update them when a meeting is booked or a stage changes.

## FAQs

**How is Intempt different from traditional CRMs?**

Unlike traditional CRMs that rely on manual data entry and static records, Intempt uses AI agents to research, segment, qualify, and enrich leads continuously, keeping your pipeline moving without constant human intervention.

**What is the built-in Customer Data Platform (CDP) and why does it matter?**

The built-in CDP unifies all your customer data across channels into a single profile. It resolves user identities by merging anonymous and known sessions, connects users to their companies, and combines behavioral, firmographic, and journey data. This gives your team a complete, real-time view of every customer.

**How does AI-powered segmentation work in Intempt?**

You can create customer segments simply by describing them in plain language. The AI analyzes lifecycle, qualification, and engagement data to build segments automatically. These segments update in real time as new data comes in, so your campaigns always target the right audience.

**What data enrichment sources does Intempt use?**

Intempt pulls live enrichment data from external sources, including People Data Labs, DropContact, and other public databases. This fills in missing attributes on user and account records automatically, keeping your data complete and current.

**Is Intempt compliant with GDPR and CCPA?**

Yes. Intempt includes built-in consent management tools for GDPR and CCPA compliance. You can collect and track user permissions, handle right-to-be-forgotten and data portability requests with one click, and offer customers a customizable preference center.

**What platforms does Intempt integrate with?**

Intempt offers native integrations with popular platforms, including HubSpot, Shopify, Stripe, and more. It provides real-time data sync across your CRM, marketing, and eCommerce tools, with customizable triggers, field mappings, and data flows to fit your specific workflows.

`,
  },
  "intent-to-action-ltv": {
    title: "How to turn intent into action and actions into lifetime value",
    image: "/growthplays/intent.jpg",
    content: `Identify key user moments, automate targeted actions, and optimize every stage of the lifecycle — from activation to expansion.

## About the Growth Play

Increasing Customer Lifetime Value (CLV) isn't about sending more messages. It's about sending the right message, at the right time, in the right place.

Most lifecycle marketing tools can segment users and send campaigns, but they stop short of continuously adapting to what users are actually doing in real time.

This Growbook shows how to use GrowthOS to connect behavior tracking, lifecycle stage classification, and automated multi-channel journeys. You'll learn how to identify high-value moments, trigger the right interventions, and deliver personalized web and in-app experiences — ensuring no opportunity for retention or expansion slips through the cracks.

We'll use Otto, a demo SaaS platform for project management, to illustrate the approach.

TL;DR – GrowthOS for Lifecycle Marketers

Track meaningful goal events such as feature activations, onboarding completion, or purchases.
Use Lifecycle Agents to automatically classify users into real-time stages like Champion, Promising, or At Risk.
Launch multi-channel journeys triggered by lifecycle stage, behavior, and AI-driven logic.
Personalize email, push, SMS, and in-app experiences using Smart Snippets and Experiences.
Adapt campaigns dynamically based on engagement, purchases, or inactivity.
Track conversion, engagement, and retention impact directly in Journey and Experience Analytics.

Result
A living lifecycle system that improves retention, drives expansion, and maximizes customer lifetime value.

## Benefits

* Maximize retention and revenue
Intervene at exactly the right moment based on real user behavior.

* Automate lifecycle targeting
Replace manual segmentation with AI-powered lifecycle classification.

* Run smarter multi-channel campaigns
Combine email, push, SMS, and in-app nudges into a single, coordinated flow.

* Personalize every touchpoint
Deliver messages that automatically adapt to each user's lifecycle stage.

* Measure and optimize in one place
See campaign performance alongside product engagement metrics.

## How It Works

### Step 1: Define and track goal events

Check or define key events and confirm the following are tracked:
'added to cart', 'activated feature', and 'completed onboarding'.

If any events are missing, create them using the "Create Event" option.

### Step 2: Launch a Lifecycle Agent

In Agents, create a Lifecycle Agent to automatically classify users into dynamic stages such as:
Champion
Loyal
Recent
Needs Attention
At Risk
Inactive

Stages update in real time, ensuring your targeting is always current.

### Step 3: Launch a Journey

Create a new journey with branching logic.

Example: At Risk User Recovery Flow
Trigger: Lifecycle stage = "At Risk"

If the user re-engages, move them to the "Win" path.
If there is no engagement, retry after a delay or send a Slack alert for manual follow-up.

Good to know

You can also use AI Coach to create journeys by describing your goal in plain text, for example:
"Re-engage at-risk users with a 7-day multi-channel campaign."

AI Coach will generate the journey with triggers, segment logic, and message flow automatically.

You can also:
Assign tasks to internal teams when key events occur, such as a manual success check-in.
Update user attributes as users move through journey stages.

### Step 4: Personalize site and in-app experiences

In Experiences, create targeted on-site or in-app messages for specific lifecycle stages such as "At Risk" or "Needs Attention".

Run A/B tests on variants to continuously optimize engagement and conversion.

### Step 5: Track and optimize performance

In Journey Analytics, track:
Step completions
Replies and clicks
Conversions tied to the original goal

In Experience Analytics, monitor:
On-site engagement
Lift compared to control versions

Iterate campaigns based on data, not guesswork.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "product-complexity-personal-moments": {
    title: "How to turn product complexity into personal moments",
    image: "/growthplays/complexity.jpg",
    content: `Increase your customer's basket size and order volume with personalized recommendations.

## About the Growth Play

Managing a catalog is one job. Making it feel personal everywhere is the real work.

This Growth Play shows how to use GrowthOS to map your product feed, apply the right recommendation logic for each surface, and measure impact. You'll move from raw SKUs to tailored product suggestions across homepage, category pages, product detail pages, cart, and post-purchase moments — and reuse the same logic in email, SMS, and push.

The goal is simple: more relevant products, less setup.

TL;DR – GrowthOS for Merchandisers

Upload your catalog and map key fields such as category, inventory, brand, price, and tags.
Generate recommendations from a built-in library: bestsellers, trending items, visitor-based picks, similar items, and frequently purchased together.
Match recommendation logic to context: homepage inspiration, category focus, product alternatives and bundles, cart cross-sell, and post-purchase upsell.
Reuse the same recommendation blocks in Journeys (email, SMS, push) and Experiences (on-site or in-app).
Personalize recommendations by audience or behavior without custom code.
Test layouts and compare performance using campaign analytics.

Result
Higher relevance on every surface, with significantly less operational overhead.

## Benefits

* Lift AOV and conversion
Show products that make sense for the specific moment in the customer journey.

* One setup, many surfaces
Use the same recommendation logic across your website and messaging channels.

* Move fast without developers
Drag, drop, deploy, and iterate in minutes.

* Stay in control
Apply include and exclude rules, inventory awareness, and margin-based filters.

* See real impact
Track clicks, adds to cart, orders, and lift versus control.

## How It Works

### Step 1: Upload and map your catalog

Import SKUs with key attributes such as category, brand, price, tags, images, and inventory. Keep product IDs consistent so tracking, recommendations, and bundles remain stable.

### Step 2: Choose recommendation logic by context

Homepage
Use bestsellers, most popular, or newest items. Switch to visitor-based recommendations when user history is available.

Category pages
Show top sellers and trending products within the current category.

Product pages
Recommend similar items based on style, color, or price, and show products frequently purchased together.

Cart
Cross-sell based on items already in the basket and surface last-minute add-ons.

Thank-you and post-purchase
Show purchased-with sets or upsells guided by margin, loyalty, or repeat intent.

### Step 3: Activate recommendations in Journeys

Add product blocks to email, SMS, and push messages. Each message adapts dynamically per user, keeping recommendations relevant at send time.

### Step 4: Bring recommendations to the site with Experiences

Place the same recommendation blocks on-site or in-app for key audiences such as returning shoppers, cart abandoners, or loyalty segments. Customize layouts and run A/B tests to optimize performance.

### Step 5: Measure and iterate

Use campaign and experience analytics to compare variants and confirm lift. Keep what performs well and continue testing incremental improvements.

Good to Know

Keep catalog fields clean and consistently typed.
Refresh inventory data on a reliable schedule.
Set fallbacks for out-of-stock items and cold-start visitors.
Cap repeat recommendations to avoid fatigue.
Align rules with business goals such as margin, seasonality, or brand priorities.
Use the same audiences across site and messaging to maintain consistency.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "insight-to-impact": {
    title: "How to go from insight to impact without report sprawl",
    image: "/growthplays/insight.jpg",
    content: `Turn analysis into action with profiles you trust, core reports, one dashboard, and fast journeys or experiences to fix issues and prove what worked.

## About the Growth Play

Most tools can show charts. Product analysts need answers that actually change the product and the numbers.

This Growth Play shows how to use GrowthOS to clearly understand Users and Accounts, build the three core reports that matter (Insights, Funnels, and Retention), combine them into a single Dashboard, and turn findings into action using Journeys and Experiences. The goal is a clean loop: understand, act, and measure — without hopping across tools or drowning in reports.

TL;DR – GrowthOS for Product Analysts

Inspect Users and Accounts in one place, with full event and activity history.
Build Insights reports to understand feature adoption and usage by cohort.
Build Funnels from signup through onboarding, activation, and purchase.
Build Retention reports to spot stickiness and churn patterns.
Combine everything into a single Dashboard with filters and breakdowns.
Turn insights into action by launching Journeys or Experiences directly from findings.
Measure impact in report trends and Journey or Experience analytics.

Result
Fewer reports, clearer decisions, and faster product improvements.

## Benefits

* Clarity first
See who's using what, when they're using it, and where they drop off.

* From charts to changes
Move directly from a finding to a fix or experiment.

* Shared context
Users roll up into Accounts, so Product, Marketing, and Sales work from the same story.

* Less tool juggling
Analysis, execution, and measurement live in one system.

* Proof of impact
Tie changes directly to activation, retention, and revenue.

## How It Works

### Step 1: Anchor on Users and Accounts

Open real user and account profiles. Confirm you can see key actions and meaningful attributes. This becomes your ground truth for understanding behavior.

### Step 2: Build an Insights report

Track which features are being used, by whom, and when. Add simple breakdowns such as plan, lifecycle stage, or geography to surface patterns worth testing.

### Step 3: Build a Funnels report

Map the journey from signup to onboarding, activation, and purchase. Compare drop-offs by device, plan, or campaign to find the highest-leverage opportunities.

### Step 4: Build a Retention report

Measure how often users return over time. Identify which features correlate with repeat usage and which segments tend to fall off.

### Step 5: Assemble a Dashboard

Pin your Insights, Funnel, and Retention reports together. Add Event, Segment, or Journey analytics as needed. This becomes your weekly product control room.

### Step 6: Act and measure

When you spot a drop-off or opportunity, launch a small Journey or adjust an on-site Experience. Monitor the same reports for lift. Keep what works and roll back what doesn't.

Good to Know

Keep event names simple and consistent. You don't need many — just the right ones.
Clearly mark Goal Events (success outcomes) and Intent Events (early signals).
Favor recent time windows over permanent flags; freshness beats static lists.
Start small with one feature, one funnel, and one cohort, then expand once signal is clear.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "experiment-personalize-dev-queue": {
    title: "How to experiment, find winners, and personalize without the dev queue",
    image: "/growthplays/experiment.jpg",
    content: `Deliver web and mobile experiences that learn fast and feel personal.

## About the Growth Play

Conversion lifts don't come from adding more banners. They come from running clearer tests, choosing winners with confidence, and following up at the right moment.

This Growth Play shows how to use GrowthOS to run experiments on web or mobile, rely on a trustworthy stats engine to identify winners, turn those winners into targeted personalizations, and layer in Journeys to activate or recover users. The goal is a continuous loop: try, learn, apply, follow up, and measure.

TL;DR – GrowthOS for CX Marketers

Create Experiences for web or mobile and choose the page or screen to test.
Run Experiments with multiple variants across layout, copy, offers, or URLs.
Target by audience, such as returning users, campaign traffic, or high-intent segments.
Rely on Sequential Testing, CUPED variance reduction, and confidence intervals to pick real winners.
Apply winning variants and convert them into segment-based personalizations.
Add Journeys to re-engage drop-offs across email, push, or SMS.
Track lift in Experience Analytics and downstream impact in Journey Analytics.

Result
Faster learning, clearer wins, and consistent follow-through without waiting on developers.

## Benefits

* Learn faster
Test ideas visually, ship small changes, and see impact quickly.

* Personalize with purpose
Target segments that actually behave differently, not broad guesses.

* Stay coordinated
Your site, app, and messaging all work from the same audiences.

* Reduce handoffs
Create, test, and apply changes without a long dev queue.

* Prove lift
Use a stats engine designed to reduce noise and false positives.

## How It Works

### Step 1: Create segments for personalization

Define segments such as "Ready for upgrade" or "Haven't logged in for more than 7 days." These segments will power both experiments and follow-up actions.

### Step 2: Create an Experience for web or mobile

Select the page or screen you want to change. Use the visual editor to modify layout, copy, offers, or placement. Create variants with their own display rules, targeting, and success goals.

### Step 3: Start an Experiment with clear targets

Run the experiment across variants and target specific audiences, such as returning users, campaign-driven traffic, or high-intent segments.

### Step 4: Let the stats engine do the math

Monitor results using Sequential Testing so you can safely check performance early. Use CUPED to reduce variance and rely on confidence intervals to focus on meaningful lift.

### Step 5: Apply the winner and personalize by segment

Once statistical significance is reached, apply the winning variant. Turn it into a personalization so the best version is shown to the segment that benefits most.

### Step 6: Add the activation layer

If the experiment surfaces drop-offs or hesitation, launch a Journey for that audience. Start with email, then follow up with push or SMS using simple delays and outcomes. Add Slack alerts when a human touch is helpful.

### Step 7: Measure and iterate

Review Experience Analytics to confirm lift and Journey Analytics to track engagement and conversions. Keep what works and line up the next test.

Good to Know

Define one primary goal per experiment and keep variants focused so you know what caused the change.
Use the same segments for testing and follow-up to stay consistent.
Reuse copy blocks with Smart Snippets so updates stay synchronized.
Run fewer, clearer experiments, ship winners quickly, and move on to the next question.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "route-enrich-leads": {
    title: "How to Route and Enrich Inbound and Outbound Leads",
    image: "/growthplays/routing.jpg",
    content: `Route leads faster, enrich them with the right context, and ensure every handoff feels intentional.

## About the Growth Play

Lead routing determines whether the first conversation happens at the right moment—or not at all. When a hand-raiser waits, intent fades. When the wrong rep responds, context breaks.

This Growth Play explains why routing matters, how teams usually approach it, and how to build a clean lead routing system in Intempt that balances speed, fairness, and relevance. You'll learn how to enrich leads in real time, qualify them with clear rules, and assign ownership using structured conditions. Inbound routing prioritizes speed-to-lead, while outbound routing respects ownership and ensures clean handoffs to reps.

TL;DR

Capture inbound and outbound leads in one system.
Enrich and qualify leads before any human touches them.
Match leads to existing accounts and owners first.
Apply routing rules by territory, segment, product, or language, then fall back to weighted round-robin.
Notify reps instantly and create context-rich tasks.
Track speed-to-lead, meeting rate, and close rate, then iterate.

## Benefits

* Faster first touch because routing and booking happen instantly.
* Cleaner handoffs with persistent account ownership across channels.
* Fair workload distribution that prevents cherry-picking.
* Better decisions driven by analytics that show where time and deals are lost.
* ABM-safe routing that keeps every contact under the right owner, improving show and close rates.

## How It Works

### Step 1: Connect sources and track intent events

Start by wiring all lead sources into Intempt so every team sees the same lead everywhere. Connect website forms, chat, ads, outbound sequences, and your CRM. If you use HubSpot, Intempt's native integration makes CRM fields and ownership visible directly inside the platform.

Track a small set of high-intent events such as form submitted, demo requested, pricing viewed, and lead replied. Keep key fields clean and consistent: email, role, and region for the person; domain, industry, and employee count for the account. The goal is a single place where you can inspect a lead, understand the account, and take action immediately.

Best practice

Define your "minimum viable data" for routing upfront. If company size or industry drives routing, require those fields at capture or enrich them automatically. Normalize emails and domains, deduplicate aggressively, and match leads to accounts as soon as they enter the system so ownership persists from the first touch.

### Step 2: Enrich and qualify before routing

Create a Journey that triggers whenever a new lead is created. The first step enriches missing fields using Intempt's enrichment capabilities.

Next, run a Qualification Agent that scores leads using Fit plus Activity. Fit reflects how closely the lead matches your ICP, while Activity captures intent signals from your website and product. Only high-fit, high-activity leads move forward to routing. The rest are automatically routed into nurture flows.

Best practice

Keep qualification logic transparent. Reps should immediately understand why a lead is marked "Ready." Start with simple rules and refine them later using Analytics once you have real performance data.

### Step 3: Apply your routing strategy

Apply routing rules in a clear, consistent order. Use a multi-channel branch and add a lead routing node to assign ownership.

Start with account continuity. If an account already has an owner or pod, route the lead there. If not, apply rules based on region, company size, product interest, use case specialization, or ABM tier. When no rule matches, fall back to a weighted round-robin pool.

Respect PTO schedules and daily capacity limits. If a pool is unavailable or at capacity, automatically waterfall to the next eligible queue.

Handoffs across the funnel

Use the same routing logic for SDR to AE, AE to CSM, product activity to sales or success, and product-led upgrades. In every case, preserve account ownership, respect capacity, and surface the assigned rep's calendar so prospects book with the person who already owns the relationship.

### Step 4: Notify reps and assign work with context

As soon as a lead is assigned, notify the rep via Slack or email. Include essential context such as source, recent activity, qualification score, enriched fields, and any existing account owner. Automatically create a task with a clear next step, such as a call or personalized outreach.

You can also attach a Research Agent to provide additional background so reps don't need to context-switch before reaching out.

Best practice

Put scheduling where intent happens. Show the assigned rep's calendar on the thank-you or confirmation page so booking is one click. Automate reminders, handle reschedules, update CRM status for booked or no-show meetings, and re-queue leads only if they go untouched within your freshness window.

### Step 5: Measure and tighten the loop

Review task and journey analytics regularly. Track speed-to-lead, meeting rates, lead sources, distribution fairness, reassignment rates, and conversion from MQL to SQL to closed deals.

If leads stall or cluster with a few reps, adjust rule order, pool weights, or capacity caps. Run a monthly audit on account ownership after conversion to ensure new contacts consistently land under the correct accounts.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "reddit-agent-find-customers": {
    title: "How to Build a Reddit Agent That Finds Customers for You",
    image: "/growthplays/reddit.jpg",
    content: `Listen to the right conversations, respond in the right voice, and turn Reddit into a long-tail customer acquisition channel.

## About the Growth Play

Reddit is a compounding channel. Helpful answers earn trust inside a subreddit, then continue to drive value as those threads surface in Google search results, LLM answers (like ChatGPT), and other AI discovery layers. That's why showing up early, with the right tone, matters more than posting often.

This Growth Play shows how to use Intempt to listen for the right Reddit conversations, enrich them with context, generate on-voice reply drafts, keep humans in the loop, and turn Reddit participation into durable AI-SEO benefits that bring ICP traffic long after the day you post.

TL;DR

Connect a Reddit social-listening source and stream posts into Intempt.
Enrich each post with a Research Agent and score reply priority.
Generate two to three reply angles and one short draft in your persona.
Notify your team with full context so a human can post quickly.
Track traffic and signups using UTMs and source analytics, then iterate on angles and keywords.

## Benefits

* Show up where your ICP is actively asking questions and capture intent early.
* Earn compounding SEO and AI-SEO value as Reddit threads rank and feed LLM answers.
* Drive qualified traffic that converts better than generic social channels.
* Save hours by automating listening, research, and drafting while keeping humans in control.

## How It Works

### Step 1: Connect sources and track events

Start by integrating a social-listening tool that monitors Reddit mentions. Configure keywords, competitor names, brand terms, negative keywords, and the subreddits you care about. You can use tools like OG or Octolens for this.

Connect the listener's webhook to Intempt so every qualified Reddit post arrives with basic details such as the URL, title, subreddit, author, and engagement signals. Once connected, Intempt will receive an event each time a relevant Reddit mention happens.

### Step 2: Enrich each post with a Research Agent

Create a Research Agent in Intempt to analyze incoming Reddit posts and authors. Inputs typically include the post URL, title, and username.

Prompt the agent to produce a short research brief covering what the author is asking, their pain points and desired outcomes, any buying or usage triggers, inferred role or company size, a topic category, and two or three reply angles that would feel native to that subreddit.

The Research Agent uses an LLM to read the full thread, extract intent, infer context, and suggest reply angles that match subreddit norms.

Best practice

Treat every subreddit as its own market. Tone, culture, and rules vary widely, so never reuse the same messaging across subreddits like r/SaaS and r/Entrepreneur. Warm up accounts by earning baseline karma before mentioning your product. Pace activity naturally and avoid anything that looks automated.

How you frame a reply matters as much as the insight itself. Lead with experience, examples, or numbers. Avoid strong CTAs. Mention your product only when it genuinely clarifies the solution.

### Step 3: Generate replies in your persona with Snippets

Create a Snippet in Intempt that takes the Research Brief and generates a Reddit-ready reply in your persona. You can do this using a custom prompt or by applying your Brand Kit.

The Snippet turns the brief into a short, human-sounding reply that fits Reddit norms and avoids promotional language.

Aim for two or three short paragraphs with one or two practical steps, a soft contrast in how you approach the problem, and a light offer to share a checklist or resource if helpful. Keep links off by default and add disclosure only when appropriate. Angles that perform well tend to be experience-first, checklist-style, or neutral comparisons.

### Step 4: Notify humans and post with context

Create a Journey that triggers whenever a Reddit mention event comes in. Run the Research Agent, then the Snippet, and send a Slack message or email to your team with everything needed to act quickly: the post title, author, subreddit, link, research brief, suggested angles, and the recommended reply draft.

Optionally create a task so someone owns the reply and monitors follow-up comments or questions.

### Step 5: Measure and tighten the loop

For replies without links, analyze traffic and signups inside Intempt using source attribution. Pair this with native Reddit engagement metrics like upvotes, comments, and saves. Maintain a lightweight tracker of threads that start ranking in Google or appearing in AI answers.

Double down on subreddits and angles that consistently drive qualified traffic and signups. Retire those that don't. Refresh your subreddit map and keyword list quarterly as audience behavior shifts.

Bonus: Reddit Promotion Checklist for SaaS

Warm up your account by earning at least ten karma through genuinely helpful comments before any self-promotion.
Choose subreddits carefully by using curated lists and checking where competitors are already discussed.
Prioritize recent, high-engagement threads and skip anything spammy or overtly promotional.
Comment to add value first, mention your product only when it naturally fits, and avoid links unless asked.
Track results in focused three-day sprints, compare subreddit performance by visits and signups, and scale what works.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "customer-qualification-scoring": {
    title: "Customer qualification scoring",
    image: "/growthplays/qualification.jpg",
    content: `Build custom Fit and Activity scores using any data point to prioritize leads, focus teams, and improve conversion outcomes.

## About the Growth Play

Customer qualification scoring helps you focus on the leads most likely to convert by combining who a customer is (Fit) with what they do (Activity). Instead of relying on static lead lists or gut feel, you create transparent, data-backed scores that reflect real engagement and relevance.

This Growth Play shows how to use Intempt to build custom Fit and Activity scores, normalize them automatically, and apply those scores across segmentation, journeys, and analytics. The result is clearer prioritization, better alignment between marketing and sales, and more efficient use of time and resources.

## Benefits

* Improved lead prioritization
Focus sales and marketing effort on leads with the highest likelihood of conversion.

* Targeted marketing campaigns
Segment customers by Fit and Activity to deliver more relevant, personalized experiences.

* Better customer insight
Understand engagement strength and conversion potential at a glance.

* Efficient resource allocation
Direct human effort to leads that deserve it most and automate nurture for the rest.

* Data-driven decisions
Refine qualification logic using real performance data instead of assumptions.

* Higher conversion rates
Align outreach, timing, and messaging with verified intent and relevance.

## How It Works

### Step 1: Create a Qualification Agent

Navigate to the Agents section and create a new Qualification Agent. Start by defining Fit criteria using attributes that matter for your business, such as company size, industry, job title, or region. Assign weights based on how strongly each attribute signals conversion potential.

Add at least three Fit categories using the "Add category" option. Each category should represent a meaningful level of fit, with its own conditions and relative weight. This keeps scoring structured and easy to understand.

### Step 2: Define Activity criteria

Next, define Activity scoring by selecting key engagement events such as signups, logins, feature usage, demo requests, or purchases. Prioritize events that indicate genuine buying or adoption intent for your audience.

Assign weights to each event based on importance. Enable decay so older activity gradually loses influence unless repeated. This ensures scores reflect current interest rather than historical behavior.

### Step 3: Normalize and calculate scores

Intempt automatically normalizes all weights, so you don't need to force totals to equal 100 percent. Based on your Fit and Activity rules, each lead receives a combined score and is categorized into clear qualification levels such as low, medium, or high.

This gives you a consistent, comparable view of lead quality across your entire funnel.

### Step 4: Use scores for segmentation and engagement

Segment customers
Create dynamic segments such as "High Fit and High Activity" or "High Fit and Low Activity" using qualification scores.

Apply targeted strategies
Design engagement strategies for each segment. High-scoring leads might receive direct sales outreach or premium offers, while lower-scoring leads enter nurture flows focused on education and activation.

Track and refine
Monitor how each segment performs in terms of engagement, meetings, and conversions. Adjust scoring logic as you learn which attributes and behaviors truly predict success.

### Step 5: Use scores in Journeys

Create Journeys triggered by qualification scores. For example, start a sales-assist or demo follow-up journey for high-activity leads, or a reactivation flow for high-fit but low-activity accounts.

Add conditional logic inside the Journey so actions align with score levels. High-scoring leads can receive time-sensitive offers or direct rep contact, while lower-scoring leads receive content, onboarding, or product education.

Review Journey performance regularly and refine both scoring rules and messaging based on what drives the best outcomes.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
  "segment-customers-lifecycle": {
    title: "Segment Customers by Lifecycle Stage",
    image: "/growthplays/segmentation.jpg",
    content: `Use Recency, Frequency, and Monetary (RFM) analysis to segment customers by lifecycle stage and target them with the right experience at the right time.

## About the Growth Play

Lifecycle segmentation groups customers automatically based on how recently they purchased, how often they purchase, and how much they spend. Using dynamic RFM scores, you can understand where each customer sits in their lifecycle and respond with the most relevant messaging, journeys, and on-site experiences.

This Growth Play shows how to build a Lifecycle Agent in Intempt, turn lifecycle scores into actionable segments, and activate those segments across journeys and personalizations to maximize retention and lifetime value.

## Benefits

* Automated segmentation
Customers are automatically grouped based on real purchase behavior using the Lifecycle Agent.

* Real-time updates
Lifecycle segments update in real time as customers interact or make purchases.

* Better targeting
Run highly relevant campaigns tailored to each lifecycle stage.

* Improved retention
Identify customers who are drifting away and re-engage them before they churn.

* Higher lifetime value
Focus effort on high-value customers and growth-ready segments.

## How It Works

### Step 1: Define and create events

Set up conversion events
Identify your core conversion event, such as "Purchase," and ensure it is tracked correctly in your data layer. Include the right properties, such as purchase date and total price, so recency, frequency, and monetary calculations are accurate.

### Step 2: Build the Lifecycle Agent

Go to the Agents section
Navigate to the Agents section in Intempt and select "Create Agent."

Select recency and frequency events
Choose the event that represents conversion, typically "Purchase." This event is used to calculate both recency and frequency. The same flow applies to both models.

Select the monetary event and value
Choose the same conversion event and define the property that represents monetary value, such as "Total price."

Define agent targeting
Exclude users who should not be evaluated, such as anonymous visitors or users who have never signed up, to keep lifecycle scoring accurate.

Define the timeframe
Set a rolling timeframe for analysis. A 30–90 day window is recommended to avoid skewing scores with long-inactive users.

### Step 3: Create segments and journeys based on lifecycle scores

Create lifecycle segments
Go to the Segments section and create new segments using the attribute generated by the Lifecycle Agent.

Example segment configuration
Segment name: Champions
Condition: Attribute segment equals Champions

Common RFM segment definitions
Champions: Bought recently, buy often, and spend the most
Regulars: Purchase consistently
Promising: Buy regularly for smaller amounts or recently made a high-value purchase
Needs Attention: Previously high spenders who have stopped purchasing
At Risk: Infrequent, low spenders who have not purchased in a long time

Refine segments with additional conditions
You can combine lifecycle stages with other attributes for precision. For example:
High-value Champions: Segment equals Champions and total spending > $500
New Promising Customers: Segment equals Promising and sign-up date < 30 days

Create journeys for each segment
Go to the Journeys section and create a new journey for each lifecycle segment.

Define journey triggers
Trigger journeys when a user enters a lifecycle segment, such as entering the Champions segment.

Example journey for Champions
Start with a welcome email featuring exclusive access or early previews.
Follow with a VIP rewards message offering perks like free shipping or early access.
Send personalized product recommendations based on past purchases.
Encourage advocacy or user-generated content with a reward or discount.

Add decision points
Use engagement-based decisions to branch the journey. For example, send VIP rewards only if the user clicks the welcome email, or send a reminder if they do not engage.

Activate journeys
Review each journey and activate it. Create separate journeys for Champions, Regulars, Promising, Needs Attention, and At Risk segments.

### Step 4: Deploy personalizations

Create a personalization campaign
Navigate to the Personalizations section and create a new campaign.

Create experiences for each lifecycle segment
Build a separate experience for each RFM segment within the same campaign.

Examples of segment-specific experiences

Champions
Show exclusive homepage banners, VIP top bars, premium product recommendations, and special offers.

Regulars
Highlight loyalty programs, rewards points, and frequently purchased products.

Promising
Offer welcome discounts, best-sellers, and confidence-building social proof.

Needs Attention
Use re-engagement messaging, personalized recommendations, and limited-time discounts.

At Risk
Display "We miss you" messaging, stronger incentives, and discounted or clearance items.

Set targeting rules
Ensure each experience is shown only to users in the corresponding lifecycle segment.

Activate the personalization campaign
Review setup and activate to start delivering personalized experiences in real time.

### Step 5: Monitor and optimize

Track journey performance
Use Journey Analytics to monitor triggered users, conversions, conversion rates, and average days to convert. Adjust timing, messaging, or branching when performance drops.

Track personalization performance
Use Personalization Analytics to evaluate control vs personalized experiences, conversion rates, conversion value, and lift. Strong lift indicates effective personalization; weak results signal a need to refine content or targeting.

Continuously optimize
Review lifecycle definitions, journey performance, and personalization results regularly to keep segmentation aligned with changing customer behavior.

## FAQs

**How is Intempt different from traditional CRMs?**


**What is the built-in Customer Data Platform (CDP) and why does it matter?**


**How does AI-powered segmentation work in Intempt?**


**What data enrichment sources does Intempt use?**


**Is Intempt compliant with GDPR and CCPA?**


**What platforms does Intempt integrate with?**


`,
  },
};

export default async function GrowthPlayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const play = growthPlays[id];

  if (!play) {
    notFound();
  }

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        // Images (markdown image syntax: ![alt](path))
        if (paragraph.startsWith("![") && paragraph.includes("](") && paragraph.endsWith(")")) {
          const match = paragraph.match(/!\[([^\]]*)\]\(([^)]+)\)/);
          if (match) {
            const [, alt, src] = match;
            return (
              <div key={index} className="my-8">
                <Image
                  src={src}
                  alt={alt || "Image"}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            );
          }
        }
        // Headers
        if (paragraph.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="mt-12 mb-6 text-3xl font-semibold text-black first:mt-0"
            >
              {paragraph.replace("## ", "")}
            </h2>
          );
        }
        if (paragraph.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="mt-8 mb-4 text-2xl font-semibold text-black"
            >
              {paragraph.replace("### ", "")}
            </h3>
          );
        }
        if (paragraph.startsWith("#### ")) {
          return (
            <h4
              key={index}
              className="mt-6 mb-3 text-xl font-semibold text-black"
            >
              {paragraph.replace("#### ", "")}
            </h4>
          );
        }

        // Lists
        if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
          const items = paragraph
            .split("\n")
            .filter((line) => line.trim().startsWith("- ") || line.trim().startsWith("* "))
            .map((line) => line.replace(/^[-*] /, "").trim());
          return (
            <ul key={index} className="mt-4 mb-4 space-y-2 list-disc list-inside">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-black/80">
                  {item.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={partIndex}>
                          {part.replace(/\*\*/g, "")}
                        </strong>
                      );
                    }
                    return <span key={partIndex}>{part}</span>;
                  })}
                </li>
              ))}
            </ul>
          );
        }

        // Numbered lists
        if (/^\d+\.\s/.test(paragraph)) {
          const items = paragraph
            .split("\n")
            .filter((line) => /^\d+\.\s/.test(line.trim()))
            .map((line) => line.replace(/^\d+\.\s/, "").trim());
          return (
            <ol key={index} className="mt-4 mb-4 space-y-2 list-decimal list-inside">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-black/80">
                  {item.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={partIndex}>
                          {part.replace(/\*\*/g, "")}
                        </strong>
                      );
                    }
                    return <span key={partIndex}>{part}</span>;
                  })}
                </li>
              ))}
            </ol>
          );
        }

        // Regular paragraphs
        if (paragraph.trim()) {
          return (
            <p
              key={index}
              className="mt-4 mb-4 text-lg leading-8 text-black/80"
            >
              {paragraph.split(/(\*\*.*?\*\*)/g).map((part, partIndex) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={partIndex} className="font-semibold text-black">
                      {part.replace(/\*\*/g, "")}
                    </strong>
                  );
                }
                return <span key={partIndex}>{part}</span>;
              })}
            </p>
          );
        }

        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="bg-white text-black">
      <HeaderSection
        brand={siteContent.brand}
        navItems={siteContent.nav.items}
        actions={siteContent.nav.actions}
      />
      <main>
        {/* Breadcrumb */}
        <section className="pt-8 pb-4">
          <Container>
            <div className="mx-auto max-w-4xl">
              <nav className="flex items-center gap-2 text-sm text-black/60">
                <Link
                  href="/growthplays"
                  className="hover:text-[#0382ff] transition-colors"
                >
                  Growth Plays
                </Link>
                <span>/</span>
                <span className="text-black/80">{play.title}</span>
              </nav>
            </div>
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(3,130,255,0.10)_0%,rgba(3,130,255,0)_60%)]"
          />
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
                  {play.title}
                </h1>
                
                {/* Author and Share */}
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-[#0382ff]/10">
                      <Image
                        src="/founder-photo.jpg"
                        alt="Sid Chaudhary"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">
                        Sid Chaudhary
                      </h3>
                      <p className="text-sm text-black/60">Founder & CEO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-black/60">Share:</span>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(play.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 hover:text-[#0382ff] transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 hover:text-[#0382ff] transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Growth Play Content */}
        <article className="py-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {formatContent(play.content)}
              </div>
            </div>
          </Container>
        </article>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-b from-black/5 to-transparent">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-semibold tracking-tight text-black mb-8 text-center sm:text-3xl">
                  Thanks for reading till the end. Here are 3 ways we can help
                  you grow your business:
                </h2>
                <div className="space-y-0 divide-y divide-black/10">
                  {/* Option 1 */}
                  <div className="py-6 group hover:bg-black/5 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#0382ff]/10 text-[#0382ff] text-sm font-semibold">
                        1
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#0382ff] transition-colors">
                          Boost growth with proven growth plays
                        </h3>
                        <p className="text-sm text-black/70 mb-3 leading-relaxed">
                          Explore our Growth Play Library, filled with actionable
                          growth tactics and step-by-step guides to unlock your
                          app's potential.
                        </p>
                        <a
                          href="/growthplays"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0382ff] hover:gap-2 transition-all group/link"
                        >
                          Check out Growth Play Library
                          <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Option 2 */}
                  <div className="py-6 group hover:bg-black/5 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#0382ff]/10 text-[#0382ff] text-sm font-semibold">
                        2
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#0382ff] transition-colors">
                          Create a free GrowthOS account
                        </h3>
                        <p className="text-sm text-black/70 mb-3 leading-relaxed">
                          Create a free GrowthOS account and get started on the
                          journey to grow your app.
                        </p>
                        <a
                          href="https://app.intempt.com/"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0382ff] hover:gap-2 transition-all group/link"
                        >
                          Get started free on GrowthOS
                          <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Option 3 */}
                  <div className="py-6 group hover:bg-black/5 transition-colors">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#0382ff]/10 text-[#0382ff] text-sm font-semibold">
                        3
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#0382ff] transition-colors">
                          Get advice from a Growth expert
                        </h3>
                        <p className="text-sm text-black/70 mb-3 leading-relaxed">
                          Schedule a personalized discovery call with our founder to
                          explore how GrowthOS can help you grow your business.
                        </p>
                        <a
                          href="https://calendly.com/sidchaudhary/meet-sid?month=2025-12"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0382ff] hover:gap-2 transition-all group/link"
                        >
                          Book a growth call
                          <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </Container>
        </section>

        {/* Email Subscription Section */}
        <section className="py-16 border-t border-black/10">
          <Container>
            <AnimateIn>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold text-black mb-4">
                  Subscribe to The Full Stack Marketer Growth Plays
                </h2>
                <p className="text-black/70 mb-6">
                  Zero theory or mindset discussions here; just actionable
                  marketing tactics that will grow revenue today.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 rounded-sm border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/40 focus:ring-2 focus:ring-[#0382ff]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-sm bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#0382ff]/50"
                  >
                    send more!
                  </button>
                </form>
              </div>
            </AnimateIn>
          </Container>
        </section>
      </main>

      <Footer
        brand={siteContent.brand}
        contact={siteContent.footer.contact}
        columns={siteContent.footer.columns}
      />
    </div>
  );
}

