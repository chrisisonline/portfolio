import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Image from 'material-ui-image'
//components & theme
import { IColor, colors } from '../theme'
import SkillTags from './SkillTags'

const useStyles = makeStyles(theme => ({
  root: {
    height: '28vw',
    margin: theme.spacing(6, 0),
  },
  grow: {
    flexGrow: 1,
  },
  imgContainer: {
    position: 'relative',
  },
  bgBox: (props: any) => ({
    backgroundColor: props.color.primary,
    position: 'absolute',
    top: 16,
    left: props.right ? 32 : 16,
    right: props.right ? 16 : 32,
    bottom: 16,
  }) as any,
  textContainer: (props: any) => (
    props.right ? {
      textAlign: 'right',
      paddingLeft: theme.spacing(9),
      paddingRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
      }
    } : {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(9),
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
      }
    }) as any,
  title: {
    color: (props: any) => props.color.primary as any,
  },
  subtitle: {
    color: (props: any) => props.color.secondary as any,
    marginTop: -theme.spacing(1),
  },
}))
const imgStyles = (right? : boolean) => ({
  position: 'absolute',
  top: -16,
  left: right ? 0 : -16,
  right: right ? -16 : 0,
  bottom: -16,
  paddingTop: 0,
})

const ProjectContainer = ({
  title,
  subTitle,
  body,
  labels,
  img,
  color = {primary: colors.text, secondary: colors.textLight},
  right = false,
}:{
  title: string,
  subTitle: string,
  body: string,
  labels: Array<string>,
  img: string,
  color?: IColor,
  right?: boolean,
}) => {
  const props = {right, color}
  const classes = useStyles(props)
  
  const ProjectImg = () => (
    <Grid className={classes.imgContainer} container item xs={6}>
      <Grid className={classes.bgBox} item></Grid>
      <Image
        color="transparent"
        style={imgStyles(right)}
        imageStyle={{objectFit: 'contain'}}
        src={img}
      />
    </Grid>
  )
  const ProjectDetails = () => (
    <Grid
      className={classes.textContainer}
      container
      item
      direction="column" 
      alignItems={right ? 'flex-end' : 'flex-start'}
      justify="center"
      xs={6}>
      <Typography className={classes.title} variant="h2">
        { title }
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        { subTitle }
      </Typography>
      <Typography variant="body1">
        { body }
      </Typography>
      <SkillTags labels={labels} bgColor={color.primary} right={right}/>
    </Grid>
  )

  return (
    <Grid className={classes.root} container item>
    {
      right ?
      <>
        <ProjectDetails />
        <ProjectImg />
      </> : 
      <>
        <ProjectImg />
        <ProjectDetails />
      </>
    }
    </Grid>
  )
}

export default ProjectContainer