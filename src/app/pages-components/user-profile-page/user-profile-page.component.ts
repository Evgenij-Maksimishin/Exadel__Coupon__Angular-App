import {Component, Inject, OnInit} from '@angular/core';
import {L10N_LOCALE, L10nLocale, L10nTranslationService} from 'angular-l10n';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {SubscriptionService} from '../../services/subscription.service';

interface Vendor {
  subscriberId: number;
  subscriberName: string;
  subscribed: boolean;
}

interface Category {
  subscriberId: number;
  subscriberName: string;
  subscribed: boolean;
}

interface Tag {
  subscriberId: number;
  subscriberName: string;
  subscribed: boolean;
}

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
  public url = '../../../assets/images/avatar-placeholder.png';

  public user: User;

  public vendors: Vendor[];

  public selectedVendors: Vendor[] = [];

  public categories: Category[];

  public selectedCategories: Category[] = [];

  public tags: Tag[];

  public selectedTags: Tag[] = [];

  public selectedItems: string;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    private translation: L10nTranslationService,
    private authService: AuthService,
    private subscriptionService: SubscriptionService,
  ) {}

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    this.loadVendors();
    this.loadCategories();
    this.loadTags();
    this.selectedItems = this.translation.translate('subscriptions.selectedItems');
  }

  private loadVendors() {
    this.subscriptionService.getVendors().subscribe((data) => {
      this.vendors = data;
      this.vendors.forEach((vendor) => {
        if (vendor.subscribed) {
          this.selectedVendors.push({...vendor});
        }
      });
    });
  }

  private loadCategories() {
    this.subscriptionService.getCategories().subscribe((data) => {
      this.categories = data;
      this.categories.forEach((category) => {
        if (category.subscribed) {
          this.selectedCategories.push({...category});
        }
      });
    });
  }

  private loadTags() {
    this.subscriptionService.getTags().subscribe((data) => {
      this.tags = data;
      this.tags.forEach((tag) => {
        if (tag.subscribed) {
          this.selectedTags.push({...tag});
        }
      });
    });
  }

  public handleVendorSelect(event: any) {
    let subscription;
    const selectedVendorsIds: any[] = [];
    this.selectedVendors.forEach((vendor) => {
      selectedVendorsIds.push(vendor.subscriberId);
    });
    if (selectedVendorsIds.includes(event.itemValue.subscriberId)) {
      subscription = {
        subscriberId: event.itemValue.subscriberId,
        subscriberType: 'VENDOR',
        subscriberName: event.itemValue.subscriberName,
        subscribed: true,
      };
    } else {
      subscription = {
        subscriberId: event.itemValue.subscriberId,
        subscriberType: 'VENDOR',
        subscriberName: event.itemValue.subscriberName,
        subscribed: false,
      };
    }
    this.subscriptionService.updateSubscription(subscription).subscribe();
  }

  public handleCategorySelect(event: any) {
    let subscription;
    const selectedCategoriesIds: any[] = [];
    this.selectedCategories.forEach((category) => {
      selectedCategoriesIds.push(category.subscriberId);
    });
    if (selectedCategoriesIds.includes(event.itemValue.subscriberId)) {
      subscription = {
        subscriberId: event.itemValue.subscriberId,
        subscriberType: 'CATEGORY',
        subscriberName: event.itemValue.subscriberName,
        subscribed: true,
      };
    } else {
      subscription = {
        subscriberId: event.itemValue.subscriberId,
        subscriberType: 'CATEGORY',
        subscriberName: event.itemValue.subscriberName,
        subscribed: false,
      };
    }
    this.subscriptionService.updateSubscription(subscription).subscribe();
  }

  public handleTagSelect(event: any) {
    let subscription;
    const selectedTagsIds: any[] = [];
    this.selectedTags.forEach((tag) => {
      selectedTagsIds.push(tag.subscriberId);
    });
    if (selectedTagsIds.includes(event.itemValue.subscriberId)) {
      subscription = {
        subscriberId: event.itemValue.subscriberId,
        subscriberType: 'TAG',
        subscriberName: event.itemValue.subscriberName,
        subscribed: true,
      };
    } else {
      subscription = {
        subscriberId: event.itemValue.subscriberId,
        subscriberType: 'TAG',
        subscriberName: event.itemValue.subscriberName,
        subscribed: false,
      };
    }
    this.subscriptionService.updateSubscription(subscription).subscribe();
  }
}
