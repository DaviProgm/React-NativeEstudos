import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from './styles'
import { Participant } from "../../components/Participant"
import { useState } from "react"

export default function Home() {
    const [participants, setParticipants] = useState<string[]>(['']);
    const [participantName,setParticipantName]  = useState('')

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Erro ao cadastrar", "Esse participante já está adicionado a sua lista ")
        }
        setParticipants(prevState =>[...prevState, participantName])
        setParticipantName('')
    }
    function handleParticipanteRemove(name: string) {


        Alert.alert("Remover", `Deseja remover o participante ${name}`, [
            {
                text: 'Excluir',
                onPress:() => setParticipants(prevState => prevState.filter(Participant =>  Participant !== name))

            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    return (
        <View style={styles.container} >


            <Text style={styles.eventName}>
                Novo evento
            </Text>
            <Text style={styles.eventDate}>
                sexta 4 de novembro de 2025
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={'gray'}
                    onChangeText={e => setParticipantName(e)}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={() => handleParticipanteRemove(item)} />

                )}
                ListEmptyComponent={() => (
                    <text style={styles.listEmptyText}>
                        Não tem ninguem que vai nesse evento
                    </text>
                )}
            />

        </View>
    )
}
