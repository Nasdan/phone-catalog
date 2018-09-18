import React from 'react';
import PropTypes from 'prop-types';
import { promiseTrackerHoc } from 'react-promise-tracker';
import { PropagateLoader } from 'react-spinners';
import { spinner, loader } from './spinner.styles';

const InnerSpinner = props =>
  props.trackedPromiseInProgress && (
    <div className={spinner}>
      <div className={loader}>
        <PropagateLoader color="#ffffff" size={25} />
      </div>
    </div>
  );

InnerSpinner.propTypes = {
  trackedPromiseInProgress: PropTypes.bool.isRequired,
};

export const Spinner = promiseTrackerHoc(InnerSpinner);
