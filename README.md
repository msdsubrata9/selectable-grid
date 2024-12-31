# Selectable Grid

- Create a 10x10 grid of square DIVs with a single pixel black border. Each cell should be 20px by 20px, which should include the border

- These DIVs should be selectable as a sub-group when the user holds the left mouse button, and drags a box around any number of cells in the grid. Any cells within the bounds of this box should be highlighted blue (i.e. the background-color should be set to blue). NOTE: you do not need to draw the bounding box. It is shown in the mockup below just to communicate where the user started dragging

- Only cells completely within the bounds of the dragged box should be highlighted. When the user releases the mouse, the cells should remain highlighted. If the user clicks again to draw a new bounding box, the highlighted cells should reset. Dragging should work at any point on the page, e.g. if the user starts dragging within the grid, or outside of the grid.

# Requirments

- 10x10 grid with a single pixel black border/gridlines
- Each grid cell should be 20x20 pixels (including the border)
- User can drag (invisible) bounding box to select cells in the grid
- Cell is selected if it is completely within the bounding box
- Selected cells should be highlighted blue
- Cells should remain selected on releasing the mouse
- All cells should be unselected if the user starts dragging to create a new bounding box
- User can start dragging to create a bounding box from anywhere on the page
