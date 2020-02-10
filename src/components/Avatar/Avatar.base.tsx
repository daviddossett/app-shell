import { getClassNames } from './Avatar.styles';
import { IAvatarProps } from './Avatar.types';
import React from 'react';
import { Persona, PersonaSize, IPersonaSharedProps, PersonaPresence } from 'office-ui-fabric-react';
import personaImage  from '../../images/persona.png'

export const AvatarBase: React.FC<IAvatarProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  const personaDetails: IPersonaSharedProps = {
    imageUrl: personaImage,
    imageInitials: 'AR',
  }
  
  return (
    <div className={classNames.root}>
      <Persona {...personaDetails} size={PersonaSize.size28} presence={PersonaPresence.online} className={classNames.avatar} />
    </div>
  );
}