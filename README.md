# roast-sass

SASS Feature implemented are -
1. Variables - 
    Where - Used in common.scss
    How - To define assignment level base colors such as nav, footer and html/body background color.

2. Custom Properties -
    Where - variables.scss (declared) & feature.scss (consumed)
    How - To create css root Pseudo class and scss-function creating font color dynamically.  

3. Nesting -
   Where - common.scss & flex.scss.
   How - To create nav and form styles.

4. Interpolation - #{} syntax gives string without quotes
   Where - feature.scss & variable.scss.
   How - To create margin classes and root Pseudo class.

5. Placeholder Selectors - Created base submit button selector and extended in form and order table.
   Where - feature.scss (created) & order.scss and reservation.scss (consumed)
   How - Created Project level submit buttons, reused them in order and reservation page

6. Mixins - Use to set background and font color
   Where - feature.scss (created) & common.scss (consumed)
   How - To create generic background and color dynamically - Nav button and footer

7. Functions - Use to set font color based on color passed
   Where - features.scss
   How - To create font color dynamically, mixins call them internally.

Grid & Flex
1. Grid - Used grid to define styles for order table and form.
   Where - Order page (grid.scss)
   How - To align order tabular menu and form structure. 
   
2. Flex - Used Flex to define reservation form and subtitle.
   Where - Reservation page (flex.scss)
   How - To align reservation form structure.
   
