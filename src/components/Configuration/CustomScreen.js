import React from 'react';
import PropTypes from 'prop-types';

//material ui
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { InputLabelWithTooltip, OptionWrapper, OptionTitle, TextField } from './CustomizeUIElements';

import { log } from '../../utils';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    display: 'inherit',
  },
});

// the example on material ui has this function statement
class CustomScreen extends React.Component {

  // for call back to work with field included
  handleClick = event => {
    log('handleClick', this.props);
    // update this if to include the minimum required fields
    // if (this.props.tableauSettings.ChoroFillScale && this.props.tableauSettings.ChoroFillScaleColors) {
      this.props.customCallBack(this.props.field)
    // }
  }
  
  render() {
    const {
      classes,
      handleChange,
      tableauSettings } = this.props;

    log('we are in custom', this.props);
    return (
      <div className="sheetScreen">
        <OptionWrapper>
          <div class="content-container">
            <OptionTitle>{this.props.configTitle}</OptionTitle>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                  title="Edge Type"
                  tooltipText="Select the style of edge for your viz"
                />
              <Select
                value={tableauSettings.edgeType || "normal"}
                onChange={handleChange}
                input={<Input name="edgeType" id="edgeType-helper" />}
              >
                 <MenuItem value={"normal"}>Normal</MenuItem>
                 <MenuItem value={"linearc"}>Line Arc</MenuItem>
                 <MenuItem value={"curve"}>Curve</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                    title="Viz Layout"
                    tooltipText="Select the layout for your viz (vertical, horizontal or radial"
                  />
              <Select
                value={tableauSettings.networkProjection || "vertical"}
                onChange={handleChange}
                input={<Input name="networkProjection" id="networkProjection-helper" />}
              >
                 <MenuItem value={"vertical"}>Vertical</MenuItem>
                 <MenuItem value={"horizontal"}>Horizontal</MenuItem>
                 <MenuItem value={"radial"}>Radial</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                      title="Edge Render Type"
                      tooltipText="Select from Semoitic's Render Modes"
                    />
              <Select
                value={tableauSettings.edgeRender || "normal"}
                onChange={handleChange}
                input={<Input name="edgeRender" id="edgeRender-helper" />}
              >
                 <MenuItem value={"normal"}>Normal</MenuItem>
                 <MenuItem value={"solid-fill"}>Solid Filled</MenuItem>
                 <MenuItem value={"hachure-thin"}>Hachure Thin</MenuItem>
                 <MenuItem value={"hachure-thin-fill"}>Hachure Thin Filled</MenuItem>
                 <MenuItem value={"hachure-thick"}>Hachure Thick</MenuItem>
                 <MenuItem value={"hachure-thick-fill"}>Hachure Thick Filled</MenuItem>
                 <MenuItem value={"dots"}>Dots</MenuItem>
                 <MenuItem value={"dots-fill"}>Dots Filled</MenuItem>
                 <MenuItem value={"dashed"}>Dashed</MenuItem>
                 <MenuItem value={"dashed-fill"}>Dashed Fill</MenuItem>
                 <MenuItem value={"cross-hatch"}>Cross Hatch</MenuItem>
                 <MenuItem value={"cross-hatch-fill"}>Cross Hatch Filled</MenuItem>
                 <MenuItem value={"zigzag"}>Zigzag</MenuItem>
                 <MenuItem value={"zigzag-line"}>Zigzig Line</MenuItem>
                 <MenuItem value={"zigzag-fill"}>Zigzag Filled</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                title="Node Render Type"
                tooltipText="Select from Semoitic's Render Modes"
              />
              <Select
                value={tableauSettings.nodeRender || "normal"}
                onChange={handleChange}
                input={<Input name="nodeRender" id="nodeRender-helper" />}
              >
                 <MenuItem value={"normal"}>Normal</MenuItem>
                 <MenuItem value={"solid-fill"}>Solid Filled</MenuItem>
                 <MenuItem value={"hachure-thin"}>Hachure Thin</MenuItem>
                 <MenuItem value={"hachure-thin-fill"}>Hachure Thin Filled</MenuItem>
                 <MenuItem value={"hachure-thick"}>Hachure Thick</MenuItem>
                 <MenuItem value={"hachure-thick-fill"}>Hachure Thick Filled</MenuItem>
                 <MenuItem value={"dots"}>Dots</MenuItem>
                 <MenuItem value={"dots-fill"}>Dots Filled</MenuItem>
                 <MenuItem value={"dashed"}>Dashed</MenuItem>
                 <MenuItem value={"dashed-fill"}>Dashed Fill</MenuItem>
                 <MenuItem value={"cross-hatch"}>Cross Hatch</MenuItem>
                 <MenuItem value={"cross-hatch-fill"}>Cross Hatch Filled</MenuItem>
                 <MenuItem value={"zigzag"}>Zigzag</MenuItem>
                 <MenuItem value={"zigzag-line"}>Zigzig Line</MenuItem>
                 <MenuItem value={"zigzag-fill"}>Zigzag Filled</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                title="Node Render Angle"
                tooltipText="The angle in degress for the sketchy drawing, defaults to -41, value from -360 to 360"
              />
              <TextField  
                id="nodeRenderAngle-helper"
                name="nodeRenderAngle"
                label="Node Render Angle"
                placeholder="-41"
                className={classes.textField}
                value={tableauSettings.nodeRenderAngle}
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                    title="Color Config"
                    tooltipText="The way color will be applied"
              />
              <Select
                value={tableauSettings.colorConfig || "solid"}
                onChange={handleChange}
                input={<Input name="colorConfig" id="colorConfig-helper" />}
              >
                 <MenuItem value={"solid"}>Single Color</MenuItem>
                 <MenuItem value={"scale"}>Color Scale</MenuItem>
                 <MenuItem value={"field"}>Color Field</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                title="Color"
                tooltipText="For single, enter 1 hex code for scale enter two, e.g., #ccc,#ddd"
              />
              <TextField  
                id="nodeColor-helper"
                name="nodeColor"
                label="Node Fill Color(s)"
                placeholder="#CCCCCC or #CCCCCC,#DDDDDD"
                className={classes.textField}
                value={tableauSettings.nodeColor}
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                title="Node Fill Opacity"
                tooltipText="A decimal from 0 to 1 that will control node opacity"
              />
              <TextField  
                id="nodeFillOpacity-helper"
                name="nodeFillOpacity"
                label="Node Fill Opacity"
                placeholder=".35"
                className={classes.textField}
                value={tableauSettings.nodeFillOpacity}
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                  title="Node Size"
                  tooltipText="Toggle node size from value field"
              />
              <Select
                value={tableauSettings.nodeSize || "none"}
                onChange={handleChange}
                input={<Input name="nodeSize" id="nodeSize-helper" />}
              >
                 <MenuItem value={"none"}>None</MenuItem>
                 <MenuItem value={"value"}>Value</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                title="Minimum Node Size"
                tooltipText="Minimum radius for nodes (e.g., 1)"
              />
              <TextField  
                id="markerMinRadius-helper"
                name="markerMinRadius"
                label="Minimum Radius for Markers"
                placeholder="1"
                className={classes.textField}
                value={tableauSettings.markerMinRadius}
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                title="Maximum Node Size"
                tooltipText="Maximum radius for nodes (e.g., 10)"
              />
              <TextField  
                id="markerMaxRadius-helper"
                name="markerMaxRadius"
                label="Maximum Radius for Markers"
                placeholder="25"
                className={classes.textField}
                value={tableauSettings.markerMaxRadius}
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabelWithTooltip 
                    title="Filter Depth"
                    tooltipText="Filters everything below and equal to this level/depth out"
              />
              <Select
                value={tableauSettings.filterDepth || "none"}
                onChange={handleChange}
                input={<Input name="filterDepth" id="filterDepth-helper" />}
              >
                 <MenuItem value={"none"}>No Filter</MenuItem>
                 <MenuItem value={"0"}>1</MenuItem>
                 <MenuItem value={"1"}>2</MenuItem>
                 <MenuItem value={"2"}>3</MenuItem>
                 <MenuItem value={"3"}>4</MenuItem>
                 <MenuItem value={"4"}>5</MenuItem>
                 <MenuItem value={"5"}>6</MenuItem>
                 <MenuItem value={"6"}>7</MenuItem>
                 <MenuItem value={"7"}>8</MenuItem>
                 <MenuItem value={"8"}>9</MenuItem>
                 <MenuItem value={"9"}>10</MenuItem>
                 <MenuItem value={"10"}>11</MenuItem>
                 <MenuItem value={"11"}>12</MenuItem>
                 <MenuItem value={"12"}>13</MenuItem>
                 <MenuItem value={"13"}>14</MenuItem>
                 <MenuItem value={"14"}>15</MenuItem>
              </Select>
            </FormControl>
          </div>
        </OptionWrapper>
      </div>
      );
    }
}

CustomScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomScreen);
