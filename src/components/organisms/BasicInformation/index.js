import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'
import { Link, HumboldtMap } from 'components'
import theme from '../../themes/default'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'

const Wrapper = styled.div`
  margin-top: 140px;
  .title {
    font-weight: ${theme.fonts.titleTwo.weight};
    font-size: ${theme.fonts.subTitleOne.font};
    color: ${theme.palette.text[0]};
    padding-top: 40px;
  }
  .title-two {
    font-size: ${theme.fonts.titleTwo.font};
    color: ${theme.palette.text[0]};
    margin-top: 60px;
    padding-left: 30px;
  }
  .accent-title {
    margin-top: 20px;
    border-top: 2px solid ${theme.palette.basescale[6]};
  }
  .sub-title{
    margin-top: 20px;
    font-size: 32px;
    font-style: italic;
    color: ${theme.palette.text[0]};
    text-align: center;
  }

  .breadcrums {
    font-size: ${theme.fonts.subTitleTwo.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    text-align: center;
    color: ${theme.palette.text[0]};
    margin-top: 7px;
    margin-bottom: 30px;
  }

  .detalles-basicos {
    margin-top: 40px;
    margin-bottom: 40px;
    color: ${theme.palette.text[0]};
    font-size: ${theme.fonts.subTitleOne.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    line-height: 28px;
  }

  .detalle-item {
    font-weight: ${theme.fonts.subTitleTwo.weight};
    span {
      font-weight: 600;
    }
  }
  .sobre-recurso {
    font-size: ${theme.fonts.subTitleTwo.font};
    font-weight: ${theme.fonts.subTitleTwo.weight};
    color: ${theme.palette.text[0]};
    padding: 30px;
    column-count: 2;
    line-height: 28px;
    margin-bottom: 60px;
  }

  .icon {
    fill: ${theme.palette.text[0]} !important;
  }
`

class BasicInformation extends React.Component {

  static propTypes = {
    record: PropTypes.any.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      record: {},
    }
  }

  render() {
    return (
      <Wrapper>
        <Grid fluid>
          <Row center="xs">
            <Col className="title" xs={12} sm={12} md={12} lg={12}>REGISTRO BIOLÓGICO</Col>
            <Col className="accent-title" xs={3} sm={2} md={1} lg={1} />
          </Row>
          <Row center="xs">
            <Col xs={12} sm={12} md={12} lg={12} className="sub-title" >{this.props.record.scientificName}</Col>
            <Col xs={12} sm={12} md={12} lg={12} className="breadcrums">
              {this.props.record.kingdom} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record.phylum} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record.order} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record.family} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record.genus} <ChevronRight className="icon" viewBox="0 0 28 10" />
              {this.props.record.specificEpithet}
            </Col>
          </Row>
        </Grid>
        <Divider />
        <Grid>
          <Row className="detalles-basicos">
            <Col xs={12} sm={6} md={6} lg={6} className="detalle-item"><span>Nombre científico:</span> <Link to={'to'}><i> {this.props.record.scientificName}</i></Link></Col>
            <Col xs={12} sm={6} md={6} lg={6} className="detalle-item"><span>Nombre del recurso:</span> <a target="_blank" href={this.props.d.homepage}> {this.props.d.title}</a></Col>
            <Col xs={12} sm={6} md={6} lg={6} className="detalle-item"><span>Ubicacion:</span> {`${this.props.record.country}, ${this.props.record.stateProvince}`}</Col>
            <Col xs={12} sm={6} md={6} lg={6} className="detalle-item"><span>Publicador:</span> <Link to={'to'}> {this.props.record.providerName}</Link></Col>
            <Col xs={12} sm={12} md={12} lg={12} className="detalle-item"><span>Base del Registro:</span> {this.props.o.basisOfRecord}</Col>
            <Col xs={12} sm={12} md={12} lg={12} className="detalle-item"><span>Hábitat:</span> {this.props.record.habitat}</Col>
          </Row>
        </Grid>
        <HumboldtMap marker={[this.props.record.decimalLatitude, this.props.record.decimalLongitude]} zoom />
        <Grid>
          <Row>
            <Col className="title-two" xs={12} sm={12} md={12} lg={12}>Sobre el recurso</Col>
            <Col className="accent-title" xs={3} sm={2} md={1} lg={1} />
            <Col xs={12} sm={12} md={12} lg={12} className="sobre-recurso">{ this.props.record.description}</Col>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}

export default BasicInformation
