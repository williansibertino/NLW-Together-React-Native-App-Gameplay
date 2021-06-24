import React from 'react';
import { styles } from './styles';
import { 
    View,
    Text,
    Image
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/buttonIcons';

export function SignIn() {

    return(
        <View style={styles.container}>

            <Image 
                source={IllustrationImg} 
                style={styles.image}
                resizeMode="stretch" 
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize suas{`\n`} 
                    jogatinas.
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`} 
                    favoritos com a galera.
                </Text>

                <ButtonIcon 
                    title="Entrar com o Discord"
                    activeOpacity={0.7} 
                />
            </View>
        </View>
    );
}