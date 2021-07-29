import {Component, isDevMode, OnInit} from '@angular/core';
import {Deal} from '../../models/deal.model';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-deal-gallery',
  templateUrl: './deal-gallery.component.html',
  styleUrls: ['./deal-gallery.component.scss'],
})
export class DealGalleryComponent implements OnInit {
  public favoriteDeals: Deal[];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoritesService.getFavoriteDeals().subscribe((data) => {
      if (isDevMode()) console.log(data.elements);
      this.favoriteDeals = data.elements;
    });
  }
}
