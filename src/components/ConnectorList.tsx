import * as React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Connectors } from 'gqlx-js';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { TextEditor } from './Editor';

export interface ConnectorListProps {
  value: Connectors;
}

const detailsStyle: React.CSSProperties = {
  flexDirection: 'column',
};

export const ConnectorList: React.SFC<ConnectorListProps> = ({ value }) => (
  <>
    {Object.keys(value).map(key => (
      <ExpansionPanel key={key}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{key}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={detailsStyle}>
          {Object.keys(value[key]).map(field => (
            <div key={field}>
              <Typography component="h3" variant="h5">
                {field}
              </Typography>
              <TextEditor readOnly value={value[key][field]} mode="js" height="140px" />
            </div>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))}
  </>
);
