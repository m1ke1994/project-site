Here's the fixed script with added closing brackets:

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const productId = computed(() => Number(route.params.id));
const activeTab = ref('overview');
const activeImage = ref(0);
const relatedProductsVisible = ref(false);
const showSpecModal = ref(false);
const selectedSpec = ref(null);
const expandedFeatures = ref(false);

// Custom products data with unique content and features for each product
const products = ref([
  {
    id: 1,
    category: 'hardware',
    name: 'АРЕС Маршрутизатор PRO',
    tagline: 'Высокопроизводительное ядро вашей сети',
    shortDescription: 'Высокопроизводительный маршрутизатор для корпоративных сетей',
    description: 'Современный маршрутизатор с высокой производительностью, предназначенный для крупных корпоративных сетей. Обеспечивает надежную маршрутизацию трафика, поддерживает современные протоколы безопасности и обладает широкими возможностями управления.',
    colorAccent: '#0056b3',
    icon: 'M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 12a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 17.586V12z',
    price: 'от 120 000 ₽',
    availability: 'В наличии',
    deliveryTime: '3-5 рабочих дней',
    warranty: '3 года',
    features: [
      'Пропускная способность до 10 Гбит/с',
      'Поддержка IPv6',
      'Встроенный межсетевой экран',
      'Резервирование питания',
      'Горячая замена модулей',
      'Поддержка VLAN и QoS',
      'Маршрутизация BGP, OSPF, RIP',
      'Защита от DDoS-атак',
      'Поддержка IPsec VPN',
      'Аппаратное ускорение шифрования',
      'Динамическая маршрутизация',
      'Расширенная система логирования и аудита'
    ],
    tech_specs: {
      performance: {
        title: 'Производительность',
        items: [
          { name: 'Пропускная способность', value: '10 Гбит/с' },
          { name: 'Количество сессий', value: 'до 2 000 000' },
          { name: 'Новых сессий в секунду', value: 'до 135 000' },
          { name: 'Задержка', value: '< 10 мкс' },
          { name: 'Производительность IPsec VPN', value: '5 Гбит/с' }
        ]
      },
      interfaces: {
        title: 'Интерфейсы',
        items: [
          { name: 'Ethernet 1GbE', value: '8 портов RJ-45' },
          { name: 'SFP+ 10GbE', value: '4 порта' },
          { name: 'Консольный порт', value: '1 порт RJ-45' },
          { name: 'USB', value: '2 порта USB 3.0' },
          { name: 'Управление', value: '1 порт RJ-45 MGMT' }
        ]
      },
      physical: {
        title: 'Физические характеристики',
        items: [
          { name: 'Размеры (ШxВxГ)', value: '440 x 44 x 380 мм (1U)' },
          { name: 'Вес', value: '5.2 кг' },
          { name: 'Питание', value: '100-240В, 50-60 Гц, 2 блока питания' },
          { name: 'Энергопотребление', value: 'максимум 180 Вт' },
          { name: 'Охлаждение', value: 'активное, 4 вентилятора с горячей заменой' }
        ]
      },
      environmental: {
        title: 'Условия эксплуатации',
        items: [
          { name: 'Рабочая температура', value: 'от 0°C до 40°C' },
          { name: 'Температура хранения', value: 'от -20°C до 70°C' },
          { name: 'Относительная влажность', value: 'от 5% до 95% (без конденсации)' },
          { name: 'Уровень шума', value: '< 55 dB' }
        ]
      }
    },
    useCases: [
      {
        title: 'Опорная сеть предприятия',
        description: 'Маршрутизатор PRO является идеальным решением для создания надежной опорной сети предприятия с высокими требованиями к производительности и безопасности.',
        icon: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
      },
      {
        title: 'Граничный маршрутизатор',
        description: 'Благодаря высокой производительности и встроенным функциям безопасности, маршрутизатор эффективно выполняет функции граничного устройства для защиты периметра сети.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
      },
      {
        title: 'VPN-концентратор',
        description: 'Аппаратное ускорение шифрования и поддержка большого количества IPsec-туннелей делают устройство эффективным решением для организации защищенных удаленных подключений.',
        icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
      }
    ],
    images: [
      { 
        url: '/products/router-front.jpg', 
        alt: 'АРЕС Маршрутизатор PRO - фронтальный вид',
        thumbnail: '/products/router-front-thumb.jpg'
      },
      { 
        url: '/products/router-back.jpg', 
        alt: 'АРЕС Маршрутизатор PRO - вид сзади',
        thumbnail: '/products/router-back-thumb.jpg'
      },
      { 
        url: '/products/router-side.jpg', 
        alt: 'АРЕС Маршрутизатор PRO - вид сбоку',
        thumbnail: '/products/router-side-thumb.jpg'
      }
    ],
    included: [
      'Маршрутизатор АРЕС PRO',
      'Блок питания (2 шт.)',
      'Кабель питания (2 шт.)',
      'Консольный кабель',
      'Комплект для монтажа в стойку',
      'Краткое руководство по установке',
      'Гарантийный талон'
    ],
    bestseller: true,
    new: false,
    relatedProducts: [2, 3]
  }
]);

// Find current product
const product = computed(() => {
  return products.value.find(p => p.id === productId.value) || null;
});

// Get related products
const relatedProducts = computed(() => {
  if (!product.value) return [];
  return product.value.relatedProducts.map(id => 
    products.value.find(p => p.id === id)
  ).filter(p => p);
});

// Toggle expanded features
const toggleFeatures = () => {
  expandedFeatures.value = !expandedFeatures.value;
};

// Select image
const selectImage = (index) => {
  activeImage.value = index;
};

// Toggle related products section
const toggleRelatedProducts = () => {
  relatedProductsVisible.value = !relatedProductsVisible.value;
};

// Open specification modal
const openSpecModal = (spec) => {
  selectedSpec.value = spec;
  showSpecModal.value = true;
};

// Close specification modal
const closeSpecModal = () => {
  showSpecModal.value = false;
  setTimeout(() => {
    selectedSpec.value = null;
  }, 300);
};

// Watch for route changes to reset tab and image
watch(() => route.params.id, () => {
  activeTab.value = 'overview';
  activeImage.value = 0;
  window.scrollTo(0, 0);
});

onMounted(() => {
  // In a real app, we would fetch product data from an API
  console.log('ProductDetail component mounted', productId.value);
  
  // Scroll to top when component mounts
  window.scrollTo(0, 0);
  
  // Redirect if product not found
  if (!product.value) {
    router.push('/products');
  }
});
</script>