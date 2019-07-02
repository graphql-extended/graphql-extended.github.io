import * as React from 'react';
import { utils, defaultApi } from 'gqlx-js';
import { TextEditor } from './Editor';
import { Grid, Typography, Tabs, Tab } from '@material-ui/core';
import { TabContainer } from './TabContainer';
import { EditorAnnotation } from '../types';
import { getAnnotations, prettify } from '../utils';
import { Schema } from './Schema';
import { ConnectorList } from './ConnectorList';

const flexStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

export interface ContentProps {}

export interface ContentState {
  schema: string;
  source: string;
  connectors: any;
  error?: any;
  annotations: Array<EditorAnnotation>;
  selected: number;
}

export default class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
      source: '',
      schema: '',
      connectors: {},
      error: undefined,
      annotations: [],
      selected: 0,
    };
  }

  private changeSchema = (source: string) => {
    try {
      const gql = utils.parseDynamicSchema(source);
      utils.validate(gql, defaultApi);
      const connectors = prettify(utils.transform(gql, defaultApi));
      const schema = gql.schema.text;
      this.setState({
        source,
        schema,
        connectors,
        error: undefined,
        annotations: [],
      });
    } catch (error) {
      this.setState({
        source,
        error,
        annotations: getAnnotations(error),
      });
    }
  };

  private changeIndex = (_event: any, selected: number) => {
    this.setState({
      selected,
    });
  };

  render() {
    const { source, schema, connectors, selected, annotations } = this.state;

    return (
      <Grid container spacing={24}>
        <Grid item lg={6} xs={12} style={flexStyle}>
          <Typography component="h2" variant="h4" gutterBottom>
            Input
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Type in some valid gqlx.
          </Typography>
          <TextEditor
            onChange={this.changeSchema}
            value={source}
            mode="graphqlschema"
            remarks={annotations}
            height="100%"
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography component="h2" variant="h4" gutterBottom>
            Output
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            The resulting schema and resolvers.
          </Typography>
          <Tabs value={selected} onChange={this.changeIndex}>
            <Tab label="Schema" />
            <Tab label="Resolvers" />
          </Tabs>
          <TabContainer current={selected} desired={0}>
            <Schema value={schema} />
          </TabContainer>
          <TabContainer current={selected} desired={1}>
            <ConnectorList value={connectors} />
          </TabContainer>
        </Grid>
      </Grid>
    );
  }
}
