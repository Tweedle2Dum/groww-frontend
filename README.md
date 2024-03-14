
# Frontend Assignment Emulating A Checkout Flow 

## Grow Checkout Flow

This repository contains the implementation of a checkout flow developed as an assignment for Grow.

## Overview

The Grow Checkout Flow is a web application designed to simulate an e-commerce checkout process. It includes various steps typically found in a checkout flow such as  reviewing order , selecting payment methods, and confirmation of the order.

## Technologies Used
        TailwindCSS
        TypeScript
        Nextjs

## Project Structure

    Frontend/
            app/   #contains all routes seperated from all other components
            Components/ #contains all components 
                      Hooks/
                           API/  #contains react query API hooks
                           Theme/ #contains hooks related to themes
                      Modules/    #wrapper component with complex logic for holding dumb UI components
                      Providers/    #contains all provider components wrapped in a single AppProvider
                      UI/   #Contains building blocks/UI with minimal logic
   



## Assignment Requirements

To meet the assignment requirements, I have implemented the following features:

Caching: Implemented local API caching using react-query and local storage performance.

Interactive Elements: Developed a responsive and dynamic user interface with smooth transitions and animations while making sure they are not excessive and distracting.

Validation: Ensured proper form validation on each page to handle user input errors and validated payment information according to the selected method.

Visual Appeal: Crafted a visually appealing design following modern UI/UX principles, paying attention to color schemes, typography, and overall aesthetics.

Responsiveness: Ensured the application is responsive and works well on various screen sizes.

User-Friendly Flow: Designed an intuitive and easy-to-navigate flow from checkout to payment selection and confirmation

## Challenges Faced

#### Implementing White Labeling:
 One of the challenges we faced was implementing white labeling effectively. While the provided styles from the API were intended to adapt the application's theme dynamically, we found that some of these styles were inconsistent and lacked readability. In some cases, the styles were randomly generated, making the page and text unreadable. For this issue , I added a toggle similar to a dark mode, which allowed to switch between default styles and the API provided styles.
Also the Whitelabelling styles were limited to the Button component to prevent 

#### Preventing Layout Shifts:
 Another challenge arose when expanding accordions within the checkout flow. As users interacted with the accordion to view additional information or options, we noticed a layout shift occurring, which could be disruptive to the user experience.

