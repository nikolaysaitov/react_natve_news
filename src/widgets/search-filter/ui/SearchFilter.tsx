import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Picker} from '@react-native-picker/picker';
import {theme} from '../../../shared/ui/theme';
import {CATEGORIES} from '../../../shared/lib/constants';

const Container = styled.View`
  padding: ${theme.spacing.m}px;
  background-color: ${theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

const SearchContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${theme.spacing.m}px;
`;

const Input = styled.TextInput`
  flex: 1;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.m}px;
  padding: ${theme.spacing.s}px ${theme.spacing.m}px;
  margin-right: ${theme.spacing.s}px;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding: ${theme.spacing.s}px ${theme.spacing.m}px;
  border-radius: ${theme.borderRadius.m}px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;

const PickerContainer = styled.View`
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.m}px;
`;

interface SearchFilterProps {
  onSearch: (query: string, category: string) => void;
  initialCategory?: string;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({onSearch, initialCategory = ''}) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);

  const handleSearch = () => {
    onSearch(query, category);
  };

  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Поиск новостей..." value={query} onChangeText={setQuery} onSubmitEditing={handleSearch} />
        <SearchButton onPress={handleSearch}>
          <ButtonText>Поиск</ButtonText>
        </SearchButton>
      </SearchContainer>

      <PickerContainer>
        <Picker selectedValue={category} onValueChange={setCategory}>
          {CATEGORIES.map(cat => (
            <Picker.Item key={cat.value} label={cat.label} value={cat.value} />
          ))}
        </Picker>
      </PickerContainer>
    </Container>
  );
};
