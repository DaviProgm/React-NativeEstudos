import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import { styles } from './styles'
import { Participant } from "../../components/Participant"

export default function Home() {
    const participants = ['davi', 'jorge', 'joao', 'joaquim', 'jubileu', 'joao', 'joaquim', 'jubileu', 'joao', 'joaquim', 'jubileu']

    function handleParticipantAdd() {
        return (
            console.log(22)
        )
    }
    function handleParticipanteRemove(name: string) {
        console.log(`voce removeu o participante ${name}`)
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
