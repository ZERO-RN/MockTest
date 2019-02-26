/**
 * Created by zerowolf on 2018/1/16.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ZTabView} from "zero-wolf-views";
import {zAppBarHeight, zColors, zdp} from "zero-wolf-views/zIndex";

export default class MyTabView extends PureComponent {
   render(){
       return <ZTabView  globalTitleColor={'white'}
                         colors={[zColors.linear_default, zColors.linear_light]}
                         end={{x: 1.0, y: 0.0}}
                         // leftView={false}
                         barStyle={'light-content'}
                         linearStyle={{
                             elevation: 0,
                             shadowOffset: {width: 0, height: 0},
                             shadowColor: 'lightgrey',
                             shadowOpacity: 0,
                             shadowRadius: 0,
                             height: zAppBarHeight - zdp(5)
                         }}{...this.props}/>
   }
};

MyTabView.propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object,
    parentStyle: PropTypes.object,
    cutLineHeight: PropTypes.number,
    globalTitleColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    leftView: PropTypes.bool,
    hasRight: PropTypes.bool,
    rightView: PropTypes.object,
    rightIcon: PropTypes.string,
    barStyle: PropTypes.string,
    isTransparent: PropTypes.bool,
    linearStyle: PropTypes.object,
    start: PropTypes.object,
    end: PropTypes.object,
    locations: PropTypes.array,
    colors: PropTypes.array,
}
