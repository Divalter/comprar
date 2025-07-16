import { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Button as CustomButton } from '@/app/components/Button';
import { Input } from '@/app/components/Input';
import { Filter } from '@/app/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '../components/Item';

const FILTER_STATUS: FilterStatus[] = [
  FilterStatus.PENDING,
  FilterStatus.DONE,
];

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<{ id: string; status: FilterStatus; description: string }[]>([]);

  function handleAddItem(description: string) {
    if (!description.trim()) {
      return Alert.alert('Atenção', 'Por favor, informe uma descrição para o item.');
    }

    if (items.some(item => item.description === description)) {
      return Alert.alert('Atenção', 'Já existe um item com essa descrição.');
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      status: FilterStatus.PENDING,
      description,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("@assets/logo.png")}
          style={styles.logo}
        />
        <View style={styles.form}>
          <Input
            placeholder="O que você quer comprar?"
            onChangeText={setDescription}
          />
          <CustomButton
            title="Adicionar"
            onPress={() => handleAddItem(description)}
          />
        </View>
        { /* Fechamento do form */}

        <View style={styles.content}>
          <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter
                key={status}
                status={status}
                isActive={status === filter}
                onPress={() => setFilter(status)}
              />
            ))
          }
          <TouchableOpacity style={styles.clearButton} onPress={() => alert('Clear Filters')}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
          </View> 
          {/* fechamento do header */}
          
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Item 
                data={item} 
                onStatusChange={() => alert('Status Changed')}
                onRemove={() => alert('Item Removed')}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separetor} />}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
          />
        </View> 
        {/* fechamento do content */}
      </View> 
      {/* fechamento do container */}
    </>
  );
}
